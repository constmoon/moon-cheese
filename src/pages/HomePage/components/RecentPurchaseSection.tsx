import { Suspense } from 'react';
import { Flex, styled } from 'styled-system/jsx';
import { Spacing, Text } from '@/ui-lib';
import { SuspenseQuery } from '@suspensive/react-query-5';
import { recentQueries } from '@/queries/recent';
import { groupProductTotalPrice } from '@/utils/product';
import ErrorSection from '@/components/ErrorSection';
import { ErrorBoundary } from '@suspensive/react';
import PriceView from './PriceView';

function RecentPurchaseSection() {
  return (
    <styled.section css={{ px: 5, pt: 4, pb: 8 }}>
      <Text variant="H1_Bold">최근 구매한 상품</Text>

      <Spacing size={4} />

      <Flex
        css={{
          bg: 'background.01_white',
          px: 5,
          py: 4,
          gap: 4,
          rounded: '2xl',
        }}
        direction={'column'}
      >
        <ErrorBoundary fallback={<ErrorSection />}>
          <Suspense>
            <SuspenseQuery {...recentQueries.purchaseProductList()}>
              {({ data: recentPurchaseProductList }) => {
                const groupedProducts = groupProductTotalPrice(recentPurchaseProductList);

                if (groupedProducts.length === 0) {
                  return (
                    <Flex>
                      <Text variant="B2_Medium">최근 구매한 상품이 없습니다.</Text>
                    </Flex>
                  );
                }

                return (
                  <>
                    {groupedProducts.map(product => (
                      <Flex key={product.id} css={{ gap: 4 }}>
                        <styled.img
                          src={product.thumbnail}
                          alt={product.name}
                          css={{
                            w: '60px',
                            h: '60px',
                            objectFit: 'cover',
                            rounded: 'xl',
                          }}
                        />
                        <Flex flexDir="column" gap={1}>
                          <Text variant="B2_Medium">{product.name}</Text>
                          <Text variant="H1_Bold">
                            <PriceView price={product.price} />
                          </Text>
                        </Flex>
                      </Flex>
                    ))}
                  </>
                );
              }}
            </SuspenseQuery>
          </Suspense>
        </ErrorBoundary>
      </Flex>
    </styled.section>
  );
}

export default RecentPurchaseSection;

import { Suspense, useState } from 'react';
import { useNavigate } from 'react-router';
import { Box, Grid, styled } from 'styled-system/jsx';
import { Counter, SubGNB, Text } from '@/ui-lib';
import { SuspenseQuery } from '@suspensive/react-query-5';
import { ErrorBoundary } from '@suspensive/react';
import { productQueries } from '@/queries/product';
import ProductItem from '../components/ProductItem';
import ErrorSection from '@/components/ErrorSection';
import PriceView from './PriceView';
import { useCartStore } from '@/stores/useCartStore';

function ProductListSection() {
  const [currentTab, setCurrentTab] = useState('all');
  const navigate = useNavigate();
  const { addItem, removeItem, getQuantity } = useCartStore();

  const handleClickProduct = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  return (
    <styled.section bg="background.01_white">
      <Box css={{ px: 5, pt: 5, pb: 4 }}>
        <Text variant="H1_Bold">판매중인 상품</Text>
      </Box>
      <SubGNB.Root value={currentTab} onValueChange={details => setCurrentTab(details.value)}>
        <SubGNB.List>
          <SubGNB.Trigger value="all">전체</SubGNB.Trigger>
          <SubGNB.Trigger value="cheese">치즈</SubGNB.Trigger>
          <SubGNB.Trigger value="cracker">크래커</SubGNB.Trigger>
          <SubGNB.Trigger value="tea">티</SubGNB.Trigger>
        </SubGNB.List>
      </SubGNB.Root>
      <ErrorBoundary fallback={<ErrorSection />}>
        <Suspense>
          <SuspenseQuery {...productQueries.productList()}>
            {({ data: productList }) => {
              const filteredProducts =
                currentTab === 'all'
                  ? productList
                  : productList.filter(product => product.category.toLowerCase() === currentTab);

              return (
                <Grid gridTemplateColumns="repeat(2, 1fr)" rowGap={9} columnGap={4} p={5}>
                  {filteredProducts.map(product => (
                    <ProductItem.Root key={product.id} onClick={() => handleClickProduct(product.id)}>
                      <ProductItem.Image src={product.images[0]} alt={product.name} />
                      <ProductItem.Info title={product.name} description={product.description} />
                      <ProductItem.Meta>
                        <ProductItem.MetaLeft>
                          <ProductItem.Rating rating={product.rating} />
                          <ProductItem.Price>
                            <PriceView price={product.price} />
                          </ProductItem.Price>
                        </ProductItem.MetaLeft>
                        {product.isGlutenFree && <ProductItem.FreeTag type="gluten" />}
                        {product.isCaffeineFree && <ProductItem.FreeTag type="caffeine" />}
                      </ProductItem.Meta>
                      <Counter.Root>
                        <Counter.Minus
                          onClick={() => removeItem(product.id)}
                          disabled={getQuantity(product.id) === 0}
                        />
                        <Counter.Display value={getQuantity(product.id)} />
                        <Counter.Plus
                          onClick={() => addItem(product.id)}
                          disabled={getQuantity(product.id) >= product.stock}
                        />
                      </Counter.Root>
                    </ProductItem.Root>
                  ))}
                </Grid>
              );
            }}
          </SuspenseQuery>
        </Suspense>
      </ErrorBoundary>
    </styled.section>
  );
}

export default ProductListSection;

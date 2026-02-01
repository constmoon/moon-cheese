import { Counter, SubGNB, Text } from '@/ui-lib';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Box, Grid, styled } from 'styled-system/jsx';
import ProductItem from '../components/ProductItem';
import PriceView from './PriceView';
import { useQuery } from '@tanstack/react-query';
import { productQueries } from '@/queries/product';

function ProductListSection() {
  const [currentTab, setCurrentTab] = useState('all');
  const navigate = useNavigate();

  const { data: productList = [] } = useQuery(productQueries.productList());

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
      <Grid gridTemplateColumns="repeat(2, 1fr)" rowGap={9} columnGap={4} p={5}>
        {productList.map(product => (
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
              <Counter.Minus onClick={() => {}} disabled={true} />
              <Counter.Display value={0} />
              <Counter.Plus onClick={() => {}} />
            </Counter.Root>
          </ProductItem.Root>
        ))}
      </Grid>
    </styled.section>
  );
}

export default ProductListSection;

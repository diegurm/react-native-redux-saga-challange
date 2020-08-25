import React from 'react';
import { Divider, useTheme } from 'react-native-paper';

import {
  Product,
  ProductImage,
  ProductWrapper,
  ProductTitle,
  ProductPrice,
  ProductUnity,
  PlaceHolderImage,
  PlaceHolderTitle,
  PlaceHolderPrice,
} from './styles';

const ProductItemVertical = ({ data, loading }) => {
  const theme = useTheme();

  return (
    <>
      {loading ? (
        <>
          <Product>
            <PlaceHolderImage autoRun />
            <Divider />
            <ProductWrapper>
              <PlaceHolderTitle autoRun />
              <PlaceHolderTitle autoRun />
              <PlaceHolderPrice autoRun />
            </ProductWrapper>
          </Product>
        </>
      ) : (
        <>
          <Product>
            <ProductImage source={{ uri: data?.photos[0] }} />
            <ProductWrapper>
              <ProductTitle>{data?.name}</ProductTitle>
              <ProductPrice color={theme.colors.primary}>
                {data?.price}
              </ProductPrice>
            </ProductWrapper>
          </Product>
        </>
      )}
    </>
  );
};

export default React.memo(ProductItemVertical);
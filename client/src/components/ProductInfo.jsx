import React from 'react';
import ProductTitleSection from './ProductTitleSection.jsx';
import ProductColorSection from './ProductColorSection.jsx';
import ProductShipSection from './ProductShipSection.jsx';

let ProductInfo = () => {
  return (
    <div className='product-info'>
      <ProductTitleSection />
      <ProductColorSection />
      <ProductShipSection />
    </div>
  )
}

export default ProductInfo;
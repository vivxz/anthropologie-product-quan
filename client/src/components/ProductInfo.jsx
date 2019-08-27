import React from 'react';
import ProductTitleSection from './ProductTitleSection.jsx';
import ProductColorSection from './ProductColorSection.jsx';
import ProductShipSection from './ProductShipSection.jsx';

let ProductInfo = ({ pictureData }) => {
  return (
    <div className='product-info'>
      <ProductTitleSection pictureData={pictureData}/>
      <ProductColorSection />
      <ProductShipSection />
    </div>
  )
}

export default ProductInfo;
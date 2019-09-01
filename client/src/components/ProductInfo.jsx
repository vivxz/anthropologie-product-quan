import React from 'react';
import ProductTitleSection from './ProductTitleSection.jsx';
import ProductColorSection from './ProductColorSection.jsx';
import ProductShipSection from './ProductShipSection.jsx';

let ProductInfo = ({ pictureData, afterPay, handleAfterPayInfoClick }) => {
  return (
    <div className='product-info'>
      <ProductTitleSection pictureData={pictureData} afterPay={afterPay} handleAfterPayInfoClick={handleAfterPayInfoClick}/>
      <ProductColorSection pictureData={pictureData} />
      <hr className='non-dotted' ></hr>
      <ProductShipSection />
    </div>
  )
}

export default ProductInfo;
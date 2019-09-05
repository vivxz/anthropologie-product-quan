import React from 'react';
import ProductTitleSection from './ProductTitleSection.jsx';
import ProductColorSection from './ProductColorSection.jsx';
import ProductShipSection from './ProductShipSection.jsx';

let ProductInfo = ({ afterPay, colorLink, handleAfterPayInfoClick, pictureData }) => {
  return (
    <div className='product-info'>
      <ProductTitleSection afterPay={afterPay} pictureData={pictureData} handleAfterPayInfoClick={handleAfterPayInfoClick}/>
      <ProductColorSection colorLink={colorLink} pictureData={pictureData}/>
      <hr className='non-dotted' ></hr>
      <ProductShipSection />
    </div>
  )
}

export default ProductInfo;
import React from 'react';
import { IoIosInformationCircleOutline } from "react-icons/io";

var ProductTitleSection = ({ pictureData }) => {
  let { brandName, onlineExclusive, price, productName,
    reviewCount, reviewStarCount, reviewStarImages } = pictureData;
  let roundedPrice = (price / 4).toFixed(2);

  let exclusive = onlineExclusive ? 'Online Exclusive' : 'Else';

  if (pictureData) {
    return (
      <div className='product-title'>
        <div className='name'>{productName}</div>
        <div className='price'>${price}.00</div>
        <div className='payment'>Or 4 interest-free installments of ${roundedPrice} by afterpay image
          <div className='info-circle'>
            <IoIosInformationCircleOutline className='icon' />
          </div>
        </div>
        <div className='brand-name'>{brandName}</div>
        <div className='exclusive'>{exclusive}</div>
        <div className='star-reviews'>
          <div className='star-image'>{reviewStarImages[0]}</div>
          <div className='star-count'>{reviewStarCount}</div>
          <div className='review-count'>{reviewCount} Reviews</div>
        </div>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default ProductTitleSection;
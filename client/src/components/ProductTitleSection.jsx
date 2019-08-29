import React from 'react';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import StarRatings from 'react-star-ratings';

var ProductTitleSection = ({ pictureData, afterPay }) => {
  let { brandName, onlineExclusive, price, productName,
    reviewCount, reviewStarCount } = pictureData;
  let roundedPrice = (price / 4).toFixed(2);

  let exclusive = onlineExclusive ? 'Online Exclusive' : 'Else';

  if (pictureData) {
    return (
      <div className='product-title'>
        <div className='name'>{productName}</div>
        <div className='price'>${price}.00</div>
        <div className='payment'>
          <div className='caption'>Or 4 interest-free installments of ${roundedPrice} by</div>
          <div><img className='after-pay' src={afterPay}></img></div>
          <div className='info-circle'>
            <IoIosInformationCircleOutline className='icon' />
          </div>
        </div>
        <div className='brand-name'>{brandName}</div>
        <div className='exclusive'>{exclusive}</div>
        <div className='star-reviews'>
          <div className='star-image'>
            <StarRatings rating={Number(reviewStarCount)} starRatedColor='#fcc603' numberOfStars={5}
            starDimension={'20px'} starSpacing={'-1px'}
            />
          </div>
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
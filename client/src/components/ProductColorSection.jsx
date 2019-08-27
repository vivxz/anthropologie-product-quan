import React from 'react';
import SizeList from './SizeList.jsx';
import SizeGuides from './SizeGuides.jsx';

var ProductColorSection = ({ pictureData }) => {
  let { colors, colorImages, fit, sizeStandard, sizesUnavailable } = pictureData;
  let quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (pictureData) {
    return (
      <div className='product-color'>
        <div className='color-container'>
          <div className='color'>COLOR: </div>
          <div className='type'>{colors[0]}</div>
        </div>
        <div className='color-image'>C IMG</div>
        <div className='fit-container'>
          <div className='standard-fit'>Standard</div>
          <div className='petite-fit'>Standard</div>
          <div className='plus-fit'>Standard</div>
        </div>
        <div className='size-container'>
          <div className='size'>SIZE: </div>
          {/* <SizeList sizes={sizes} sizesUnavailable={sizesUnavailable} /> */}
          <div className='subclass'>
            <SizeGuides />
            <div className='divider'>|</div>
            <div className='customers-say'>Customers say True to Size</div>
          </div>
        </div>
        <div className='quantity-container'>
          <div className='quantity'>QTY: </div>
          <select className='select'>
            {quantity.map(number => {
              return (
                <option>{number}</option>
              )
            })}
          </select>
        </div>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default ProductColorSection;
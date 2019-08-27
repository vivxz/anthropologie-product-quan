import React from 'react';

var ProductShipSection = () => {
  return (
    <div className='product-ship'>
      <div className='ship-item'>
        <input type='radio'></input>
        <div className='caption'>SHIP THIS ITEM</div>
      </div>
      <div className='pick-up'>
        <div className='container'>
          <input type='radio'></input>
          <div className='caption'>PICK UP IN A STORE</div>
        </div>
        <div className='select-size'>Please Select a size to check store availability</div>
      </div>
    </div>
  )
}

export default ProductShipSection;
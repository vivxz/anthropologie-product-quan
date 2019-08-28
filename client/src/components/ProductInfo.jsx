import React from 'react';
import ProductTitleSection from './ProductTitleSection.jsx';
import ProductColorSection from './ProductColorSection.jsx';
import ProductShipSection from './ProductShipSection.jsx';

class ProductInfo extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render(){
    let { pictureData, afterPay } = this.props;
    return (
      <div className='product-info'>
        <ProductTitleSection pictureData={pictureData} afterPay={afterPay}/>
        <ProductColorSection pictureData={pictureData}/>
        <hr className='non-dotted' ></hr>
        <ProductShipSection />
      </div>
    )
  }
}

export default ProductInfo;
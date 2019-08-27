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
    let { pictureData } = this.props;
    return (
      <div className='product-info'>
        <ProductTitleSection pictureData={pictureData}/>
        <ProductColorSection pictureData={pictureData}/>
        <hr className='non-dotted' ></hr>
        <ProductShipSection />
      </div>
    )
  }
}

export default ProductInfo;
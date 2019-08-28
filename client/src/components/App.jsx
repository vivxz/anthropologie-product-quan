import React from 'react';
import MainPictureDisplay from './MainPictureDisplay.jsx';
import PictureList from './PictureList.jsx';
import ProductInfo from './ProductInfo.jsx';
import Axios from 'axios';
const pictureArray = [
  'https://s7d5.scene7.com/is/image/Anthropologie/4130206000057_038_b?$a15-pdp-detail-shot$&hei=900&qlt=80&fit=constrain',
  'https://s7d5.scene7.com/is/image/Anthropologie/4130206000057_038_b2?$a15-pdp-detail-shot$&hei=900&qlt=80&fit=constrain',
  'https://s7d5.scene7.com/is/image/Anthropologie/4130206000057_038_b3?$a15-pdp-detail-shot$&hei=900&qlt=80&fit=constrain',
  'https://s7d5.scene7.com/is/image/Anthropologie/4130206000057_038_b4?$a15-pdp-detail-shot$&hei=900&qlt=80&fit=constrain',
  
  'https://s7d5.scene7.com/is/image/Anthropologie/4130638280064_089_b4?$a15-pdp-detail-shot$&hei=900&qlt=80&fit=constrain',
  'https://s7d5.scene7.com/is/image/Anthropologie/4130638280064_089_b5?$a15-pdp-detail-shot$&hei=900&qlt=80&fit=constrain',
  'https://s7d5.scene7.com/is/image/Anthropologie/4130638280064_089_b3?$a15-pdp-detail-shot$&hei=900&qlt=80&fit=constrain'
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictureData: '',
      pictureArray: [],
      mainPicture: ''
    }
    this.getPictureData = this.getPictureData.bind(this);
    this.changeMainPicture = this.changeMainPicture.bind(this);
  }
  getPictureData(id) {
    //initially set picture Array and mainPicture to be hardcoded
    //will eventually use actual links from s3 to seed database
    Axios.get(`/api/products/${id}`)
      .then(({ data }) => {
        this.setState({
          pictureData: data,
          pictureArray,
          mainPicture: pictureArray[0]
        }, () => console.log('Data received', this.state.pictureData))
      })
      .catch((err) => {
        console.log('Data receive failed', err)
      })
  }
  changeMainPicture(e){
    this.setState({
      mainPicture: e.target.src
    })
  }
  componentDidMount() {
    this.getPictureData(1);
  }

  render() {
    let { productCategory, productName } = this.state.pictureData;
    if (productCategory === 'Dress') {
      productCategory += 'es';
    } else if (productCategory === 'Skirt') {
      productCategory += 's';
    }
    return (
      <div className='app-body'>
        <div className='product-header'>
          <div className='start'>Clothing</div>
          <div className='backslash'>/</div>
          <div className='product-category'>{productCategory}</div>
          <div className='backslash'>/</div>
          <div>{productName}</div>
        </div>
        <div className='app-body-product'>
          <div className='images-container'>
            <PictureList pictureArray={this.state.pictureArray} changeMainPicture={this.changeMainPicture}/>
            <MainPictureDisplay mainPicture={this.state.mainPicture}/>
          </div>
          <div className='product-info'>
            <ProductInfo pictureData={this.state.pictureData}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
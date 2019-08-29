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
const afterPay = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSYF5YkDEGMF8EYXrKBfL0aJOt6guePtglaHrDKQNnXkXPslvX';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictureData: '',
      pictureArray: [],
      currentFivePictureArray: [],
      mainPicture: '',
      topArrowDarken: true,
      initialArrowCounter: 0
    }
    this.getPictureData = this.getPictureData.bind(this);
    this.changeMainPicture = this.changeMainPicture.bind(this);
    this.changeFivePictures = this.changeFivePictures.bind(this);
  }
  getPictureData(id) {
    //initially set picture Array and mainPicture to be hardcoded
    //will eventually use actual links from s3 to seed database
    Axios.get(`/api/products/${id}`)
      .then(({ data }) => {
        this.setState({
          pictureData: data,
          pictureArray,
          currentFivePictureArray: pictureArray.slice(0, 5),
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
  changeFivePictures(e){
    if (e.target.id === 'top'){
      this.setState({
        currentFivePictureArray: this.state.pictureArray.slice(0,5),
        topArrowDarken: false,
        initialArrowCounter: this.state.initialArrowCounter+1
      }, () => console.log('state when top is clicked', this.state.topArrowDarken, this.state.initialArrowCounter))
    } else if (e.target.id === 'bottom'){
      this.setState({
        currentFivePictureArray: this.state.pictureArray.slice(-5),
        topArrowDarken: true,
        initialArrowCounter: this.state.initialArrowCounter+1
      }, () => console.log('state when bottom is clicked', this.state.topArrowDarken, this.state.initialArrowCounter))
    }
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
            <PictureList pictureArray={this.state.pictureArray} changeMainPicture={this.changeMainPicture} 
            currentFivePictureArray={this.state.currentFivePictureArray} changeFivePictures={this.changeFivePictures}
            topArrowDarken={this.state.topArrowDarken} initialArrowCounter={this.state.initialArrowCounter}/>
            <MainPictureDisplay mainPicture={this.state.mainPicture}/>
          </div>
          <div className='product-info'>
            <ProductInfo pictureData={this.state.pictureData} afterPay={afterPay}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
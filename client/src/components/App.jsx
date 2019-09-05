import React from 'react';
import MainPictureDisplay from './MainPictureDisplay.jsx';
import PictureList from './PictureList.jsx';
import ProductInfo from './ProductInfo.jsx';
import Axios from 'axios';
import AfterPayModal from './AfterPayModal.jsx';
const pictureArray = [
  'https://s7d5.scene7.com/is/image/Anthropologie/4130206000057_038_b?$a15-pdp-detail-shot$&hei=900&qlt=80',
  'https://s7d5.scene7.com/is/image/Anthropologie/4130206000057_038_b2?$a15-pdp-detail-shot$&hei=900&qlt=80',
  'https://s7d5.scene7.com/is/image/Anthropologie/4130206000057_038_b3?$a15-pdp-detail-shot$&hei=900&qlt=80',
  'https://s7d5.scene7.com/is/image/Anthropologie/4130206000057_038_b4?$a15-pdp-detail-shot$&hei=900&qlt=80',

  'https://s7d5.scene7.com/is/image/Anthropologie/4130638280064_089_b4?$a15-pdp-detail-shot$&hei=900&qlt=80',
  'https://s7d5.scene7.com/is/image/Anthropologie/4130638280064_089_b5?$a15-pdp-detail-shot$&hei=900&qlt=80',
  'https://s7d5.scene7.com/is/image/Anthropologie/4130638280064_089_b3?$a15-pdp-detail-shot$&hei=900&qlt=80'
];
const afterPay = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSYF5YkDEGMF8EYXrKBfL0aJOt6guePtglaHrDKQNnXkXPslvX';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictureData: '',
      pictureArray: [],
      mainPictureIndex: 0,
      transformPictureValue: 0,
      transformPictureListValue: 0,
      topArrowDarken: true,
      initialArrowCounter: 0,
      afterPayClicked: false,
      intialRenderOfMainPic: true
    }
    this.getPictureData = this.getPictureData.bind(this);
    this.changeMainPicture = this.changeMainPicture.bind(this);
    this.changeFivePictures = this.changeFivePictures.bind(this);
    this.handleAfterPayInfoClick = this.handleAfterPayInfoClick.bind(this);
    this.handleAfterPayXClick = this.handleAfterPayXClick.bind(this);
    this.calculateTransformPictureValue = this.calculateTransformPictureValue.bind(this);
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
  changeMainPicture(e) {
    let previousMainPictureIndex = this.state.mainPictureIndex;
    let currentMainPictureIndex = this.state.pictureArray.indexOf(e.target.src);
    //get width of current img
    console.log('document querySelect', document.querySelector('.image-slide'))
    let imageWidth = document.querySelector('.image-slide').clientWidth;
    let newTransformValue = this.calculateTransformPictureValue(previousMainPictureIndex, currentMainPictureIndex, imageWidth);

    this.setState({
      mainPictureIndex: currentMainPictureIndex,
      intialRenderOfMainPic: false,
      transformPictureValue: this.state.transformPictureValue - newTransformValue
    })
  }
  calculateTransformPictureValue(previous, current, width){
    //will grab index of current  and previous index
    let differenceIndex = current - previous;
    return width * differenceIndex;
  }
  changeFivePictures(e) {
    let height = document.querySelector('.picture').clientHeight;
    let moveLength;
    if (e.target.id === 'top') {
      this.setState({
        transformPictureListValue: 0,
        topArrowDarken: false,
        initialArrowCounter: this.state.initialArrowCounter + 1
      }, () => console.log('state when top is clicked', this.state.topArrowDarken, this.state.transformPictureListValue))
    } else if (e.target.id === 'bottom') {
      let lengthOver = this.state.pictureArray.length - 5;
      moveLength = lengthOver * height;
      this.setState({
        transformPictureListValue: this.state.transformPictureListValue - moveLength,
        topArrowDarken: true,
        initialArrowCounter: this.state.initialArrowCounter + 1
      }, () => console.log('state when bottom is clicked', this.state.topArrowDarken, this.state.transformPictureListValue))
    }
  }
  handleAfterPayInfoClick() {
    if (!this.state.afterPayClicked) {
      document.getElementsByClassName('app-body')[0]
      document.getElementsByClassName('app-body')[0].setAttribute('id', 'gray-out');
      document.getElementsByClassName('app-component-body')[0]
      document.getElementsByClassName('app-component-body')[0].setAttribute('id', 'no-move');
      this.setState({
        afterPayClicked: true
      }, () => console.log('afterpay clicked', this.state.afterPayClicked))
    }
  }
  handleAfterPayXClick() {
    if (this.state.afterPayClicked) {
      document.getElementsByClassName('app-body')[0].removeAttribute('id');
      document.getElementsByClassName('app-component-body')[0].removeAttribute('id');

      this.setState({
        afterPayClicked: false
      }, () => console.log('afterpay x clicked', this.state.afterPayClicked))
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
    let afterPayM = this.state.afterPayClicked ? <AfterPayModal afterPay={afterPay} handleAfterPayXClick={this.handleAfterPayXClick}/> : <div></div>

    return (
      <div className='app-component-body'>
        <div className='app-after-pay'>{afterPayM}</div>
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
                topArrowDarken={this.state.topArrowDarken} initialArrowCounter={this.state.initialArrowCounter} 
                transformPictureListValue={this.state.transformPictureListValue}/>
              <MainPictureDisplay intialRenderOfMainPic={this.state.intialRenderOfMainPic} mainPictureIndex={this.state.mainPictureIndex}
              pictureArray={this.state.pictureArray} transformPictureValue={this.state.transformPictureValue}/>
            </div>
            <div className='product-info'>
              <ProductInfo pictureData={this.state.pictureData} afterPay={afterPay} handleAfterPayInfoClick={this.handleAfterPayInfoClick}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
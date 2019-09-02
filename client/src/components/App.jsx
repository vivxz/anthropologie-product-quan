import React from 'react';
import MainPictureDisplay from './MainPictureDisplay.jsx';
import PictureList from './PictureList.jsx';
import ProductInfo from './ProductInfo.jsx';
import Axios from 'axios';
import AfterPayModal from './AfterPayModal.jsx';
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
      mainPictureIndex: 0,
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
    this.setState({
      mainPictureIndex: this.state.pictureArray.indexOf(e.target.src),
      intialRenderOfMainPic: false
    }, ()=> console.log('grabbed index', this.state.mainPictureIndex))
  }
  changeFivePictures(e) {
    if (e.target.id === 'top') {
      this.setState({
        currentFivePictureArray: this.state.pictureArray.slice(0, 5),
        topArrowDarken: false,
        initialArrowCounter: this.state.initialArrowCounter + 1
      }, () => console.log('state when top is clicked', this.state.topArrowDarken, this.state.initialArrowCounter))
    } else if (e.target.id === 'bottom') {
      this.setState({
        currentFivePictureArray: this.state.pictureArray.slice(-5),
        topArrowDarken: true,
        initialArrowCounter: this.state.initialArrowCounter + 1
      }, () => console.log('state when bottom is clicked', this.state.topArrowDarken, this.state.initialArrowCounter))
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
                topArrowDarken={this.state.topArrowDarken} initialArrowCounter={this.state.initialArrowCounter} />
              <MainPictureDisplay mainPictureIndex={this.state.mainPictureIndex} intialRenderOfMainPic={this.state.intialRenderOfMainPic} pictureArray={this.state.pictureArray}/>
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
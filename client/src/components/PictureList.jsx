import React from 'react';
import Picture from './Picture.jsx';
import { FiChevronUp } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";

class PictureList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictureNotClicked: true,
      currentPictureClicked: '',
    }
    this.checkIfPictureClickedInPictureList = this.checkIfPictureClickedInPictureList.bind(this);
  }
  checkIfPictureClickedInPictureList(event) {
    let string = 'container ';
    let containerClassSearch = string.concat(event.target.className.split(' ')[1]);
    if (this.state.pictureNotClicked) {
      document.getElementsByClassName(`${containerClassSearch}`)[0].setAttribute('id', 'picture-clicked');
      this.setState({
        pictureNotClicked: false,
        currentPictureClicked: event.target.className
      })
    } else {
      document.getElementById('picture-clicked').removeAttribute('id');
      document.getElementsByClassName(`${containerClassSearch}`)[0].setAttribute('id', 'picture-clicked');
      this.setState({
        currentPictureClicked: event.target.className
      })
    }
  }
  render() {
    let { 
      changeFivePictures, 
      changeMainPicture, initialArrowCounter, pictureArray, topArrowDarken, transformPictureListValue } = this.props;
    let topArrow = <div className='arrow'></div>;
    let bottomArrow = <div className='arrow'></div>;
    if (pictureArray.length > 5) {
      if (initialArrowCounter === 0) {
        topArrow = <FiChevronUp className='arrow' id='top' color='#f4efef' />;
        bottomArrow = <FiChevronDown className='arrow' id='bottom' color='#808080' 
        onClick={changeFivePictures}
        />;
      } else {
        if (topArrowDarken) {
          topArrow = <FiChevronUp className='arrow' id='top' color='#808080' 
          onClick={changeFivePictures}
          />;
          bottomArrow = <FiChevronDown className='arrow' id='bottom' color='#f4efef' />;
        } else {
          topArrow = <FiChevronUp className='arrow' id='top' color='#f4efef' />;
          bottomArrow = <FiChevronDown className='arrow' id='bottom' color='#808080' 
          onClick={changeFivePictures}
          />;
        }
      }
    }
    return (
      <div className='picture-list-carousel'>
        <div className='container'>
          <div className='arrow-container' id='top-arrow'>
            {topArrow}
          </div>
          <div className='picture-list-container'
            style= {
              {
                transform: `translateY(${transformPictureListValue}px)`,
                transition: 'transform ease-out 0.5s'         
              }
            }>
            {pictureArray.map((picture, index) => {
              return (
                <Picture picture={picture} key={index} id={index} changeMainPicture={changeMainPicture} checkIfPictureClickedInPictureList={this.checkIfPictureClickedInPictureList} />
              )
            })}
          </div>
          <div id='white-box'></div>
          <div className='arrow-container' id='bottom-arrow'>
            {bottomArrow}
          </div>
        </div>
      </div>
    )
  }
}

export default PictureList;
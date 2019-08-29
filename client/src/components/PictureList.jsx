import React from 'react';
import Picture from './Picture.jsx';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

class PictureList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { changeFivePictures, changeMainPicture, currentFivePictureArray, initialArrowCounter, pictureArray, topArrowDarken } = this.props;
    let topArrow = <div className='arrow'></div>;
    let bottomArrow = <div className='arrow'></div>;
    if (pictureArray.length > 5) {
      if (initialArrowCounter === 0) {
        topArrow = <IoIosArrowUp className='arrow' id='top' color='#f4efef'/>;
        bottomArrow = <IoIosArrowDown className='arrow' id='bottom' color='#808080' onClick={changeFivePictures}/>;
      } else {
        if (topArrowDarken) {
          topArrow = <IoIosArrowUp className='arrow' id='top' color='#808080' onClick={changeFivePictures}/>;
          bottomArrow = <IoIosArrowDown className='arrow' id='bottom' color='#f4efef'/>;
        } else {
          topArrow = <IoIosArrowUp className='arrow' id='top' color='#f4efef' />;
          bottomArrow = <IoIosArrowDown className='arrow' id='bottom' color='#808080' onClick={changeFivePictures}/>;
        }
      }
    }

    return (
      <div className='picture-list-carousel'>
        <div className='container'>
          <div className='arrow-container'>
            {topArrow}
          </div>
          {currentFivePictureArray.map((picture, index) => {
            return (
              <Picture picture={picture} key={index} changeMainPicture={changeMainPicture} />
            )
          })}
          <div className='arrow-container'>
            {bottomArrow}
          </div>
        </div>
      </div>
    )
  }
}


export default PictureList;
import React from 'react';
import Picture from './Picture.jsx';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

let PictureList = ({ pictureArray, changeMainPicture }) => {
  let topArrow = <div></div>;
  let bottomArrow = <div></div>;
  if (pictureArray.length > 5) {
    topArrow = <IoIosArrowUp className='arrow' color='lightgray'/>;
    bottomArrow = <IoIosArrowDown className='arrow' color='lightgray'/>;
  }
  return (
    <div className='picture-list-carousel'>
      <div className='container'>
        <div className='arrow-container'>
        {topArrow}
        </div>
        {pictureArray.map((picture, index) => {
          return (
            <Picture picture={picture} key={index} changeMainPicture={changeMainPicture}/>
          )
        })}
        <div className='arrow-container'>
        {bottomArrow}
        </div>
      </div>
    </div>
  )
}

export default PictureList;
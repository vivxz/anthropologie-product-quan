import React from 'react';

let MainPictureDisplay = ({ intialRenderOfMainPic, mainPictureIndex, pictureArray }) => {
  if (pictureArray.length > 0) {
    if (intialRenderOfMainPic) {
      return (
        <div className='main-picture'>
          <img src={`${pictureArray[mainPictureIndex]}`}></img>
          <div className='caption'>
            Hover your mouse over an image to zoom.
          </div>
        </div>
      )
    } else {
      return (
        <div className='main-picture'>
          <img src={`${pictureArray[mainPictureIndex]}`} className='slide-main-img'></img>
          <div className='caption'>
            Hover your mouse over an image to zoom.
          </div>
        </div>
      )
    }
  } else {
    return (<div></div>)
  }
}

export default MainPictureDisplay;
import React from 'react';
import MainPictureSlide from './MainPictureSlide.jsx';

let MainPictureDisplay = ({ intialRenderOfMainPic, mainPictureIndex, pictureArray, transformPictureValue }) => {
  if (pictureArray.length > 0) {
    // if (intialRenderOfMainPic) {
    return (
      // <div className='main-picture'>
        <div className='main-picture-container'
          style={
            {
              transform: `translateX(${transformPictureValue})`,
              transition: 'transform ease-out 0.5s'
            }
          }>
          {pictureArray.map((image, i) => (
            <MainPictureSlide image={image} key={i} />
          ))}
          {/* <img src={`${pictureArray[mainPictureIndex]}`}></img> */}
        </div>
      // </div>
    )
    // } 
    // else {
    //   return (
    //     <div className='main-picture-container'>
    //       <img src={`${pictureArray[mainPictureIndex]}`} className='slide-main-img'></img>
    //       <div className='caption'>
    //         Hover your mouse over an image to zoom.
    //       </div>
    //     </div>
    //   )
    // }
  } else {
    return (<div></div>)
  }
}

export default MainPictureDisplay;
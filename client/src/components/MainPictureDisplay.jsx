import React from 'react';
import MainPictureSlide from './MainPictureSlide.jsx';

let MainPictureDisplay = ({ intialRenderOfMainPic, mainPictureIndex, pictureArray, transformPictureValue }) => {
  if (pictureArray.length > 0) {
    return (
        <div className='main-picture-container'
          style={
            {
              transform: `translateX(${transformPictureValue}px)`,
              transition: 'transform ease-out 0.5s'
            }
          }>
          {pictureArray.map((image, i) => (
            <MainPictureSlide image={image} key={i} />
          ))}
        </div>
    )
  } else {
    return (<div></div>)
  }
}

export default MainPictureDisplay;
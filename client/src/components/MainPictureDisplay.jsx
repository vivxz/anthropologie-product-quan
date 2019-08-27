import React from 'react';

let MainPictureDisplay = ({ mainPicture }) => {
  return (
    <div className='main-picture'>
      <img src={`${mainPicture}`}></img>
      <div className='caption'>
        Hover your mouse over an image to zoom.
      </div>
    </div>
  )
}

export default MainPictureDisplay;
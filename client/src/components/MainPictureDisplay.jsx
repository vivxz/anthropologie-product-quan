import React from 'react';

let MainPictureDisplay = ({ mainPicture }) => {
  return (
    <div className='main-picture'>
      <img src={`${mainPicture}`}></img>
    </div>
  )
}

export default MainPictureDisplay;
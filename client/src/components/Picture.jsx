import React from 'react';

let Picture = ({ picture, changeMainPicture }) => {
  return (
    <div className='picture'>
      <img src={`${picture}`} onClick={changeMainPicture}></img>
    </div>
  )
}

export default Picture;
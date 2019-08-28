import React from 'react';

let Picture = ({ picture, changeMainPicture }) => {
  return (
    <div className='picture'>
      <div className='container'>
        <img src={`${picture}`} onClick={changeMainPicture}></img>
      </div>
    </div>
  )
}

export default Picture;
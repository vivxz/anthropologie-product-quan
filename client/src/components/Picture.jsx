import React from 'react';

let Picture = ({ picture }) => {
  return (
    <div className='picture'>
      <img src={`${picture}`}></img>
    </div>
  )
}

export default Picture;
import React from 'react';
import Picture from './Picture.jsx';

let PictureList = ({ pictureArray }) => {
  return (
    <div className='picture-list'>
      {pictureArray.map((picture,index) => {
        return (
          <Picture picture={picture} key={index}/>
        )
      })}
    </div>
  )
}

export default PictureList;
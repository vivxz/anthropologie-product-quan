import React from 'react';

let MainPictureSlide = ({ image }) => {
  const styles = {
    backgroundImage: `url("${image}")`,
    backgroundSize: 'cover',
  }  

  return (
    <div className='image-slide' style={styles}>
    </div>
  )
}

export default MainPictureSlide;
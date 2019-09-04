import React from 'react';

let MainPictureSlide = ({ image }) => {
  const styles = {
    backgroundImage: `url("${image}")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }  

  return (
    <div className='image-slide' style={styles}>
    </div>
  )
}

export default MainPictureSlide;
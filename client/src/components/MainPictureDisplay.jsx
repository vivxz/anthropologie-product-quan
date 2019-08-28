import React from 'react';

class MainPictureDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.clickMainPicture = this.clickMainPicture.bind(this);
  }
  clickMainPicture(e){
    //on click needs to bring in image as a slide from right to left
  }
  render() {
    let { mainPicture } = this.props;
    return (
      <div className='main-picture'>
        <img src={`${mainPicture}`}></img>
        <div className='caption'>
          Hover your mouse over an image to zoom.
          </div>
      </div>
    )
  }
}

export default MainPictureDisplay;
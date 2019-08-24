import React from 'react';
import MainPictureDisplay from './MainPictureDisplay.jsx';
import PictureList from './PictureList.jsx';
import ProductInfo from './ProductInfo.jsx';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render () {
    return (
      <div>
        App
        <PictureList />
        <MainPictureDisplay />
        <ProductInfo />
      </div>
    )
  }
}

export default App;
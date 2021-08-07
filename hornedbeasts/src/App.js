import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/Main';
import Data from './components/HornedData.json';
import SelectedBeast from './components/SelectedBeast';
import './App.css';
class App extends React.Component{


  constructor(props) {
    super(props);
    this.state = {
      show: false,
      description: '',
      imgUrl: 'URL',
      title: '',

    }
  }

handleData = (title, imgUrl, description, show) => {
this.setState({
   title: title,
    imgUrl: imgUrl,
       description: description,
      show: show });
};

modal = (show) =>{
 this.setState ({
   show:show
  })
}


  render() {
    return (
<>
<Header />
<SelectedBeast
         title={this.state.title}
          imgUrl={this.state.imgUrl}
           description={this.state.description}
            handleOpen={this.state.show}
            handleClose = {this.modal} />
        <Main data={Data}
         handleData={this.handleData} />

<Footer />
</>
    )
  }

}

export default App;
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
// import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
export class App extends Component {
  apikey=process.env.REACT_APP_NEWS_API;
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress});
  }
  render() {
    return ( 
   
<Router>
<LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
        //onLoaderFinished={() => this.setProgress(0)}
      />
    <Navbar color="dark"/>
  <Routes>
    <Route path='/' exact element={<News  progress={this.setProgress}  apikey={this.apikey} key="general" category="general" country="in"/>}/> 
    <Route path='/business' exact element={<News  progress={this.setProgress}  apikey={this.apikey} key="business" category="business" country="in"/>}/> 
    <Route path='/entertainment' exact element={<News  progress={this.setProgress}  apikey={this.apikey} key="entertainment" category="entertainment   " country="in"/>}/> 
    <Route path='/health' exact element={<News  progress={this.setProgress}  apikey={this.apikey} key="health" category="health" country="in"/>}/> 
    <Route path='/sciences' exact element={<News  progress={this.setProgress}  apikey={this.apikey} key="sciences" category="sciences" country="in"/>}/> 
    <Route path='/ports' exact element={<News  progress={this.setProgress}  apikey={this.apikey} key="ports" category="ports" country="in"/>}/> 
    <Route path='/technology' exact element={<News  progress={this.setProgress}  apikey={this.apikey} key="technology" category="technology" country="in"/>}/> 
    </Routes>
    </Router>
 
    );
  }
}

export default App;

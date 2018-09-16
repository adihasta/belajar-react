import React, { Component } from 'react';
import Header from './../Header';
import Home from '../Home';
import Footer from './../Footer';
import Button_Home from '../Button_Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />


        <Footer />

        <Home />
        <Button_Home />

      </div>
    );
  }
}

export default App;

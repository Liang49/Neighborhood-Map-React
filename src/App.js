import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './Map';
import axios from 'axios';
import SideBar from './SideBar';

class App extends Component {
 





  render() {
    return (
      <div className="App">
      <section>
              

      Brooklyn Famous Food
        </section>
     
      <div>
      <Map {...this.state}
      />
      </div>
      </div>
    );
  }
}





export default App;

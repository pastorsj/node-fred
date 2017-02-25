import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import api from './api.json';

class App extends Component {

    constructor(props) {
        super(props);
        console.log('API', api);
    }

    render() {
        return (
          <div className="App">
              <div className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h2>Welcome to React</h2>
              </div>
              {
                  api && api.routes && Object.keys(api.routes).forEach((key) => {
                      console.log(api.routes[key]);
                      return (
                          <div> Route {api.routes[key].method} </div>
                      );
                  })
              }
          </div>
        );
    }
}

export default App;

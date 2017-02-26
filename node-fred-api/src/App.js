import React, { Component } from 'react';
import './App.css';
import api from './api.json';

class App extends Component {

    constructor(props) {
        super(props);
        console.log('API', api);
    }

    render() {
        return (
          <div className="ui segments">
              {
                  api && api.routes && Object.keys(api.routes).map((key) => {
                      const route = api.routes[key];

                      return (
                          <div className="ui segment">
                            <h1>{key}</h1>
                            <h3>{route.method}</h3>
                            <h4>{route.description}</h4>
                            <span>Example: <code className="ui floating message"> <i className="terminal icon"></i> {route.example} </code></span>
                            <h3> Parameters </h3>
                                <table className="ui celled striped table">
                                    <thead>
                                        <tr>
                                            <th> Route </th>
                                            <th> Description </th>
                                            <th> Type </th>
                                            <th> Default Value </th>
                                            <th> Required? </th>
                                        </tr>
                                    </thead>
                                    {
                                        Object.keys(route.parameters).map((parameter) => {
                                            return (
                                                <tr>
                                                    <th> {parameter} </th>
                                                    <th> {route.parameters[parameter].description} </th>
                                                    <th> {route.parameters[parameter].type} </th>
                                                    <th> {route.parameters[parameter].default} </th>
                                                    <th> {route.parameters[parameter].required} </th>
                                                </tr>
                                            );
                                        })
                                    }
                                </table>
                            </div>
                      );
                  })
              }
          </div>
        );
    }
}

export default App;

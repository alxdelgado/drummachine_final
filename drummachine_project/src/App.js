import React, { Component } from 'react';
import DrumPad from './DrumPad';
import {Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import data from './drumData';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      display: 'Click a pad'
    }
  }

  handleDisplay = display => this.setState({ display })

  render(){
    return(
    <div id='drum-machine'>
        <div id='display'>{this.state.display}</div>
        <div id='drum-pads'>{data.map(d => (
          <DrumPad
            key={d.id}
            id={d.id}
            // letter={d.letter}
            src={d.src}
            handleDisplay={this.handleDisplay}
          />
         ))}</div>
    </div>
    )
  }
}



export default App;

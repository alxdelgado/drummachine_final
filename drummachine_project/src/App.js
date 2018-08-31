import React, { Component } from 'react';
import DrumPad from './DrumPad';
import {Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import data from './drumData';
import Sequencer from './Sequencer';
import trigData from './Sequencer';
import SelectInstrument from './SelectInstrument'



class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      display: 'Click a pad'
    }
  }

  handleDisplay = display => this.setState({ display })

  render(){

    const pads = data.map(d => {
      return(
        <DrumPad
          key={d.id}
          id={d.id}
          // letter={d.letter}
          src={d.src}
          handleDisplay={this.handleDisplay}
        />
      )
    });


    return(
    <div id='drum-machine'>
        <div id='display'>{this.state.display}</div>
        <div id='sequencer-component'>
          <Sequencer drums={data} />

        </div>
        <div id='drum-pads'>{pads}</div>
    </div>
    )
  }
}



export default App;

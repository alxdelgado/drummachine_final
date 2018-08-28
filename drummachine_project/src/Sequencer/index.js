import React, { Component } from 'react';
import trigData from './Sequencer/trigData.js';


class Sequencer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'id',
      pads: 'trigData',
      bpm: '126',
      step: 0,
      steps: 16,
      playing: false
    };
  }

  play () {
    const {bpm, type} = this.state;
    const notesArray = Object.keys(notes).map(key => notes[key]);

    this.setState({
      playing: true
    });

    this.interval = setInterval(() => {
        step: this.state.step < this.state.steps - 1 ?
          this.state.step + 1 : 0
          console.log(step)
    }, () => {

        const next = this.state.pads[this.state.step].map((pad, i) =>
          pad === 1 ? notesArray[i] : null
        ).filter(x => x);
    }), ((60 * 1000) / this.state.bpm / 2);


};

export default Sequencer;

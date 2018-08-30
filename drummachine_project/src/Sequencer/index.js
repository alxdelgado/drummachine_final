import React, { Component } from 'react';
import trigData from '../Sequencer/trigData.js';
import SelectInstrument from '../SelectInstrument';
import data from '../drumData.js';
import DrumPad from '../DrumPad/index.js';
import ClockContainer from '../ClockContainer/index.js';


class Sequencer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'id',
      pads: 'trigData',
      bpm: '126',
      step: 0,
      steps_counter: 16,
      steps: [false, false, false, false, false,
              false, false, false, false, false,
              false, false, false, false, false,
              false],
      playing: false,
      audio: {},
    };
  }

  // <----- This handles when a user clicks the "play" button. ----->
  handleClick = () => {
    this.play();
    // this.state.play();

  };

  fetchAudio = (audio) => {
    this.setState({audio: audio})
  }

  // <----- trigSelect is the logic for our "sequencer steps". It handles when an "step" has been selected. ----->
  trigSelect = (e) => {
    e.preventDefault
    // console.log(e.currentTarget.id)
    const i = e.currentTarget.id
    const localSteps = this.state.steps
    if (this.state.steps[i] === false) {
      localSteps[i] = true
    } else {
      localSteps[i] = false
    }
    this.setState({
      steps: localSteps
    })
    console.log(this.state.steps);
  }

  // <----- this is the function that runs the sequencer. -----> //
  play () {
    console.log('I am in play method');
    this.interval = setInterval(() => {
        this.setState({
          step: this.state.localSteps < this.state.localSteps - 1 ?
            this.state.localSteps + 1 : 0
        });
    }, 1000);
  }

  // <----- Our "render" method. Renders all JSX elements to the page. -----> //
  render() {
    // console.log(this.props.drums)

    const allSounds = data.map((drum) => {
      return (
        <DrumPad
          src={drum.id}
        />
      )
    });

    const sequencer = this.state.steps.map((step, i) => {

      return <input id={i} type="checkbox" onClick={this.trigSelect}></input>
    })

    return(

      <div id="sequencer-container">

        <header id="TR-9000">
          <h1>TR-9000</h1>
        </header>

        <SelectInstrument src={this.props.drums[0].src} fetchAudio={this.fetchAudio}/>



          {sequencer}

          <ClockContainer />



        <div class="buttons">
          <button
            class={this.state.playing ? 'active' : ''}
            onClick={() => {
              if (this.state.playing) {

              }
              else {
                this.play();
              }
            }}>
              Play
            </button>

        </div>

      </div>

    )
  }

};

export default Sequencer;

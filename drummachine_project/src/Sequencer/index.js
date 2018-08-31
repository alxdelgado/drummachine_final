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
      interval: '',
    }
  }

  // <----- This is the handleClick function for the "play" button. ----->
  handleClick = () => {
    this.audio.play();

  };

  fetchAudio = (audio) => {
    this.setState({audio: audio})
  }

  // <----- trigSelect is another handleClick function. It handles when an "step" has been selected. ----->
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

  play = () => {
    // console.log('I am play method');
    const playInterval = setInterval(() => {
      // console.log("interval")
        this.setState({
          step: this.state.step < this.state.steps.length - 1 ? this.state.step + 1 : 0,
          interval: playInterval
        });
    }, 1000);
  }

  stop = () => {
    // console.log(this.state.interval);
    clearInterval(this.state.interval) // this kills the setInterval.
    this.setState({interval: ''}) // setting back normal.
  }




  // <----- Our "render" method. Renders all JSX elements to the page. -----> //
  render() {
    console.log(this.state.step, "this is this.state.step")
    console.log(this.interval, 'interval');

    // const allSounds = data.map((drum) => {
    //   return (
    //     <DrumPad
    //       src={drum.id}
    //     />
    //   )
    // });

    const sequencer = this.state.steps.map((step, i) => {

      return <input id={i} type="checkbox" onClick={this.trigSelect}></input>
    })

    return(

      <div id="sequencer-container">

        <header id="TR-9000">
          <h1>TR-9000</h1>
        </header>

          { this.state.steps[this.state.step]  ? <SelectInstrument src={this.props.drums[3].src} fetchAudio={this.fetchAudio}/> : null }



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

            <button
              class={this.state.playing ? 'active' : ''}
              onClick={this.stop}>
              Stop
            </button>

        </div>

      </div>

    )
  }

};

// <----- exporting our react "Sequencer" component. -----> //
export default Sequencer;

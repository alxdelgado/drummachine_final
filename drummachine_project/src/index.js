import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import DrumContainer from './DrumContainer';
// import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
// import {Component} from 'react';



// Drum Data
const data = [
  {id: 'closed hat', letter: 'q', src: 'https://s3.us-east-2.amazonaws.com/drumsamples/DRH_CHat_01.wav'},
  {id: 'clap', letter: 'w', src: 'https://s3.us-east-2.amazonaws.com/drumsamples/DRH_Clap_01.wav'},
  {id: 'kick', letter: 'e', src: 'https://s3.us-east-2.amazonaws.com/drumsamples/DRH_Kick_01.wav'},
  {id:  'open hat', letter: 'r', src: 'https://s3.us-east-2.amazonaws.com/drumsamples/DRH_OHat_01.wav'},
  {id: 'ride', letter: 't', src: 'https://s3.us-east-2.amazonaws.com/drumsamples/DRH_Ride_01.wav'},
  {id: 'rim', letter: 'y', src: 'https://s3.us-east-2.amazonaws.com/drumsamples/DRH_Rim_01.wav'},
  {id: 'snare', letter: 'u', src: 'https://s3.us-east-2.amazonaws.com/drumsamples/DRH_Snare_03.wav'},
  {id: 'tom 01', letter: 'i', src: 'https://s3.us-east-2.amazonaws.com/drumsamples/DRH_Tom_01.wav'},
  {id: 'tom 02', letter: 'o', src: 'https://s3.us-east-2.amazonaws.com/drumsamples/DRH_Tom_02.wav'},
  {id: 'tom 03', letter: 'p', src: 'https://s3.us-east-2.amazonaws.com/drumsamples/DRH_Tom_03.wav'}
];


class DrumPad extends React.Component {

  componentDidMount() {
    console.log(this.audio)
    document.addEventListener('keydown', this.handleKeydown)
    window.focus()
  }

 componentWillUnmount() {
   document.removeEventListener('keydown', this.handleKeydown)
 }

  handleKeydown = e => {
    if(e.keyCode === this.props.letter.charCodeAt()) {
      this.audio.play()
      this.audio.currentTime = 0
      this.props.handleDisplay(this.props.id)
    }
  }

  handleClick = () => {
    this.audio.play()
    this.audio.currentTime = 0
    this.props.handleDisplay(this.props.id)
  }

  render() {
    return (
      <div
          class='drum-pad'
          id={this.props.id}
      >
        <div class="trig">
          <button onClick={this.handleClick}>Trig</button><br/>
        </div>
        <audio id={this.props.letter}
               class='clip'
               src={this.props.src}
               ref={ref => this.audio = ref}
          ></audio>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      display: 'Click or Press a Key'
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
            letter={d.letter}
            src={d.src}
            handleDisplay={this.handleDisplay}
          />
         ))}</div>
    </div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById("root"))
  registerServiceWorker();

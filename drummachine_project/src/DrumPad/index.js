import React, { Component } from 'react';
class DrumPad extends React.Component {

  componentDidMount() {
    // console.log(this.audio)
    window.focus()
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
      >

        <button className="trig" onClick={this.handleClick}>Trig</button>

        <audio id={this.props.letter}
               class='clip'
               src={this.props.src}
               ref={ref => this.audio = ref}
        ></audio>

      </div>
    )
  }
}
export default DrumPad;


// Write a way for all the sounds to play. //

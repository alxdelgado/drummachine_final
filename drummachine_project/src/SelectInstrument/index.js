import React, {Component} from "react";

class SelectInstrument extends Component {

  componentDidMount() {
    // console.log(this.audio)
    // this.audio.play();
    this.props.fetchAudio(this.audio)
    window.focus();
  }



  render() {
    console.log(this.props)
    return (
      <div
          class='drum-pad'
      >
        <p>"ding"</p>

        <audio id={this.props.letter}
               class='clip'
               src={this.props.src}
               ref={ref => this.audio = ref}
        ></audio>

      </div>
    )
  }
};

export default SelectInstrument;

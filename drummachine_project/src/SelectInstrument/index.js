import React, {Component} from "react";

class SelectInstrument extends Component {

  componentDidMount() {
    // console.log(this.audio)
    this.audio.play();
    // this.props.fetchAudio(this.audio)
    window.focus();
  }



  render() {
    // console.log(this.props)
    return (


        <audio id={this.props.letter}
               class='clip'
               src={this.props.src}
               ref={ref => this.audio = ref}
        ></audio>

    )
  }
};

export default SelectInstrument;

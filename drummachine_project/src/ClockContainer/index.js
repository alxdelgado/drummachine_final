import React, {Component} from "react";

class ClockContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        clockStart: false
    }
  }

  // <----- Mounting the clockStart state ----- > //
  componentDidMount() {
    console.log(this.props.clockStart);
    const start = this.state.clockStart;
    if(this.state.clockStart === false) {
      this.state.clockStart = true;
    } else {
      this.state.clockStart = false;
    }
  }

  render() {
    console.log("this is the running clock");
    return (
      <div id="clock-container">

          <div className="clock-section">

            <div className="clock-divblock">



            </div>

          </div>

      </div>
    )
  }

};

export default ClockContainer;

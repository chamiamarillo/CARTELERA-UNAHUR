import React, { Component } from "react";

class FechaHora extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    };
  }
  UNSAFE_componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  UNSAFE_componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }
  render() {
    return (
      <div className="fechahora">
        {this.state.time}
      </div>
    );
  }
}

export default FechaHora;
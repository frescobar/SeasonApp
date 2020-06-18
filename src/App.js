import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: "",
      errorMessage: "",
    };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        console.log(err);
        this.setState({
          errorMessage: err.message,
        });
      }
    );
  }

  render() {
    return (
      <div>
        {!this.state.errorMessage && !this.state.lat && <h3>Loading...</h3>}
        {this.state.lat ? (
          <h3>Latitud: {this.state.lat}</h3>
        ) : (
          <h3>Error: {this.state.errorMessage}</h3>
        )}
      </div>
    );
  }
}

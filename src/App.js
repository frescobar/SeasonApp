import React, { Component } from "react";
import SeasonDisplay from "./SeasonDisplay";
import Loading from "./Loading";

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
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    if (!this.state.lat && this.state.errorMessage) {
      return <h3>Error: {this.state.errorMessage}</h3>;
    }
    return <Loading message="Please accept location request" />;
  }
}

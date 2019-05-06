import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  // Mounting: Set up a timer when clock is rendered to the DOM for the first time.
  // ... and use tick() to tick once a second.
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  // Unmounting: Remove the timer whenever the Clock is removed from the DOM.
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // Run the Clock component every second.
  // Oh, and tell this.state.date to update itself whenever I change.
  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div>
        <p>{this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}

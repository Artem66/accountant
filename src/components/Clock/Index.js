import React, { Component } from 'react';
import './style.css';

export default class Clock extends Component {
  constructor(props){
    super(props);
    this.state = { 
      date: new Date()
    };
  }
  componentDidMount() {
    this.id = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillMount() {
    clearInterval(this.id);
  }

  tick() {
    this.setState ({
      date: new Date()
    });
  }
  render() {
    return <h4 className="Clock">{this.state.date.toLocaleTimeString('en-GB')}</h4>;
  }
}

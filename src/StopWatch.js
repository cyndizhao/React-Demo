// We import the Component module seperated from the React object
import React, { Component } from 'react';

class StopWatch extends Component {
  constructor (props) {
    super(props);

    this.state = { count: 0 };
    this.startCount = this.startCount.bind(this);
    this.stopCount = this.stopCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }

  startCount () {
    if (!this._countId) {
      this._countId = setInterval(function () {
        this.setState({
          count: this.state.count + 1
        })
      }.bind(this), 1000);
    }
  }

  stopCount () {
    clearInterval(this._countId);
    delete this._countId;
  }
  resetCount(){
    this.setState({count: 0})
  }

  render () {
    const { count } = this.state;
    return (
      <div className='stop-watch'>
        <span>Time is: { count } </span>
        <button onClick={this.startCount}>Start</button>
        <button onClick={this.stopCount}>Stop</button>
        <button onClick={this.resetCount}>Reset</button>
      </div>
    )
  }
}

export default StopWatch;

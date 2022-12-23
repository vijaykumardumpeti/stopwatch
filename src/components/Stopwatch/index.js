import {Component} from 'react'

import './index.css'

export default class Stopwatch extends Component {
  state = {
    isStart: false,
    time: 0,
  }

  componentDidMount = () => {
    const {isStart} = this.state
    this.setState(prevState => ({
      isStart: !prevState.isStart,
    }))
    if (isStart === true) {
      this.timerID = setInterval(this.startTimeFunction, 1000)
    }
  }

  componentWillUnmount = () => {
    clearInterval(this.timerID)
  }

  startTimeFunction = () => {
    this.setState(prevState => ({
      time: prevState.time + 1,
    }))
  }

  onReset = () => {
    clearInterval(this.timerID)

    this.setState({
      time: 0,
    })
  }

  render() {
    const {time} = this.state

    const timers = time > 9 ? time : `0${time}`

    return (
      <div className="bg-container">
        <h1>Stopwatch</h1>
        <div className="timer-container-1">
          <div className="timer-container-2">
            <img
              alt="stopwatch"
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
            />
            <p>Timer</p>
          </div>
          <h1>00:{timers}</h1>
          <div className="buttons-container">
            <div>
              <button
                onClick={this.componentDidMount}
                className={`button-style ${'button-1'}`}
                type="button"
              >
                Start
              </button>
            </div>

            <div>
              <button
                onClick={this.componentWillUnmount}
                className={`button-style ${'button-2'}`}
                type="button"
              >
                Stop
              </button>
            </div>

            <div>
              <button
                onClick={this.onReset}
                className={`button-style ${'button-3'}`}
                type="button"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


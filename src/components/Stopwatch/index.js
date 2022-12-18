// Write your code here
import {Component} from 'react'

import './index.css'

export default class Stopwatch extends Component {
  state = {
    isStart: false,
    time: 0,
  }

  onStartTimer = () => {
    this.setState({
      isStart: true,
    })

    this.timerID = setInterval(this.startTimeFunction, 1000)
  }

  onStopTimer = () => {
    this.setState({
      isStart: true,
    })
    clearInterval(this.timerID)
  }

  componentWillUnmount = () => {
    clearInterval(this.timerID)
  }

  startTimeFunction = () => {
    this.setState(prevState => ({
      time: prevState.time + 1,
    }))
  }

  onResetTimer = () => {
    this.setState({time: 0, isStart: false})
    clearInterval(this.timeInterval)
  }

  render() {
    const {time, isStart} = this.state

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
                onClick={this.onStartTimer}
                className={`button-style ${'button-1'}`}
                type="button"
                disabled={isStart}
              >
                Start
              </button>
            </div>

            <div>
              <button
                onClick={this.onStopTimer}
                className={`button-style ${'button-2'}`}
                type="button"
              >
                Stop
              </button>
            </div>

            <div>
              <button
                onClick={this.onResetTimer}
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

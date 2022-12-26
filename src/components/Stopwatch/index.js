import {Component} from 'react'

import './index.css'

export default class Stopwatch extends Component {
  state = {
    isStart: true,
    seconds: 0,
  }

  startButtonClicked = () => {
    this.setState(prevState => ({
      isStart: !prevState.isStart,
    }))
    this.componentDidMount()
  }

  componentDidMount = () => {
    const {isStart} = this.state
    if (isStart === false) {
      this.elapsingTime()
    } else if (isStart === true) {
      this.componentWillUnmount()
    }
  }

  componentWillUnmount = () => {
    clearInterval(this.intervalId)
    this.setState({
      isStart: false,
    })
  }

  elapsingTime = () => {
    this.intervalId = setInterval(this.elapseTime, 1000)
  }

  elapseTime = () => {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1,
    }))
  }

  onReset = () => {
    this.setState({
      seconds: 0,
      isStart: false,
    })
  }

  timeInSeconds = () => {
    const {seconds} = this.state
    const secs = Math.floor(seconds % 60)

    const timeInSeconds = secs > 9 ? secs : `0${secs}`
    return timeInSeconds
  }

  timeInMinutes = () => {
    const {seconds} = this.state

    const minutes = Math.floor(seconds / 60)
    const timeInMinutes = minutes > 9 ? minutes : `0${minutes}`
    return timeInMinutes
  }

  render() {
    const time = `${this.timeInMinutes()}:${this.timeInSeconds()}`

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
          <h1>{time}</h1>
          <div className="buttons-container">
            <div>
              <button
                onClick={this.startButtonClicked}
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




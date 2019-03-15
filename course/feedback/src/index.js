import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)
const Statistics = ({ good, neutral, bad, avg, per }) => (
    <div>
        <Statistic counter={good} text="Good" />
        <Statistic counter={neutral} text="Neutral" />
        <Statistic counter={bad} text="Bad" />
        <Statistic counter={avg} text="Average" />
        <Statistic counter={per} text="Positive percentage" />
    </div>
)

const Statistic = (props) => (
    <div>
        <p>{props.text} {props.counter}</p>
    </div>
)

class App extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    goodClick() {
        this.setState({ good: this.state.good + 1 })
    }

    neutralClick() {
        this.setState({ neutral: this.state.neutral + 1 })
    }

    badClick() {
        this.setState({ bad: this.state.bad + 1 })
    }
    render() {
        const { good, neutral, bad } = this.state
        const avg = ((good - bad) / (good + neutral + bad) || 0).toFixed(2)
        const per = ((good / (good + neutral + bad)) * 100 || 0).toFixed(2) + ' %'
        return (

            < div className='konsta'>
                <h1>Give feedback</h1>
                <Button handleClick={this.goodClick.bind(this)} text="Good" />
                <Button handleClick={this.neutralClick.bind(this)} text="Neutral" />
                <Button handleClick={this.badClick.bind(this)} text="Bad" />
                <h2>Statistics</h2>
                <Statistics good={good} neutral={neutral} bad={bad} avg={avg} per={per} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'


const Part = (props) => {
    return (
        <p>
            {props.part.name}, {props.part.exercises}
        </p>
    )
}

const Header = (props) => {
    return (
        <h1>{props.course.name}</h1>
    )
}

const Contents = (props) => {
    return (
        <div>
            <Part part={props.parts[0]} />
            <Part part={props.parts[1]} />
            <Part part={props.parts[2]} />
        </div>
    )
}

const Total = (props) => {
    return (
        <div>
            <p>Total of {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} exercixes</p>
        </div>
    )
}
const App = () => {
    const course = {
        name: 'Superadvanced web and mobile programming',
        parts: [
            {
                name: 'Basic of React',
                exercises: 8
            },
            {
                name: 'Using props',
                exercises: 10
            },
            {
                name: 'Component states',
                exercises: 12
            }
        ]
    }

    return (
        <div className='konsta'>
            <Header course={course} />
            <Contents parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'


const Part = (props) => {
    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    )
}

const Header = (props) => {
    return (
        <h1>{props.name}</h1>
    )
}

const Contents = (props) => {
    return (
        <div>
            {props.parts.map(part => <Part key={part.id} part={part} />)}
        </div>
    )
}

const Total = (props) => {

    return (
        <div>
            <p>Total of {""}
                {props.parts.reduce((sum, i) => (
                    sum += i.exercises
                ), 0)} {""} exercises</p>
        </div>
    )
}

const Course = (props) => {
    return (
        <div>
            <Header name={props.course.name} />
            <Contents parts={props.course.parts} />
            <Total parts={props.course.parts} />
        </div>
    )
}

const App = () => {
    const course = {
        name: 'Superadvanced web and mobile programming',
        parts: [
            {
                name: 'Basic of React',
                exercises: 8,
                id: 1
            },
            {
                name: 'Using props',
                exercises: 10,
                id: 2
            },
            {
                name: 'Component states',
                exercises: 12,
                id: 3
            }
        ]
    }

    return (
        <div className='konsta'>
            <Course course={course} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
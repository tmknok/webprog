import React from 'react'

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

export default Course
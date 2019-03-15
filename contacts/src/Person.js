import React from 'react'


const Person = ({ person, delName }) => {
    return (

        <div>{person.name} {person.number} <button onClick={delName}>Delete</button></div>

    )
}


export default Person
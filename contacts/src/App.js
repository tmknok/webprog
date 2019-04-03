import React from 'react';
import Person from './Person';
import axios from 'axios';

import './App.css'

const baseUrl = "https://tinttis-contacts.herokuapp.com/api/persons"

const getALL = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response)
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: ''
    }
  }

  componentDidMount() {
    axios
      .get(`${baseUrl}`)
      .then(response => {
        this.setState({ persons: response.data })
      })
  }


  handleNameChange = (event) => {
    this.setState({ newName: event.target.value })
  }

  handleNumberChange = (event) => {
    this.setState({ newNumber: event.target.value })
  }

  addName = (e) => {
    e.preventDefault()
    const newPerson = {
      name: this.state.newName,
      number: this.state.newNumber
    }

    axios
      .post(`${baseUrl}`, newPerson)
      .then(response => {
        this.setState({
          persons: this.state.persons.concat(response.data),
          newName: '',
          newNumber: ''
        })
      })

  }

  deleteName = (id) => {
    return () => {
      const url = `${baseUrl}/${id}`
      const person = this.state.persons.find(n => n.id === id)


      if (window.confirm(`Do you really want to delete ${person.name}?`)) {

        axios
          .delete(url, person)
          .then(response => {
            this.setState({
              persons: this.state.persons.filter(person => person.id !== id)
            })
          })
      }
    }
  }



  render() {
    return (
      <div className='konsta'>
        <h2>Phone book</h2>
        <form onSubmit={this.addName}>
          <div>
            Name: <input value={this.state.newName} onChange={this.handleNameChange} />
          </div>
          <div>
            Phone number: <input value={this.state.newNumber} onChange={this.handleNumberChange} />
          </div>
          <div>
            <button type="submit">submit</button>
          </div>
        </form>
        <h2>Numbers</h2>
        <div>
          {this.state.persons.map(person =>
            <Person
              key={person.id}
              person={person}
              delName={this.deleteName(person.id)}
            />
          )}
        </div>
      </div >
    )
  }
}

export default App

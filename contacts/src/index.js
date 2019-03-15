import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios'

axios
    .get('http://localhost:3001/persons')
    .then(response => {
        const persons = response.data
        ReactDOM.render(
            <App persons={persons} />,
            document.getElementById('root')
        )
    })



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


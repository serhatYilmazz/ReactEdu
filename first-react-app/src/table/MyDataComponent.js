import React, {Component} from 'react';
import MyInputComponent from './MyInputComponent';
import axios from 'axios';

export default class MyDataComponent extends Component {

    state = {
        elements: [
            {
                id: 1,
                name: 'VirtualDOM'
            }
        ]
    };

    render() {
        let tableRows = this.state.elements.map((element, index) => {
            return <tr key={index}>
                <td>{element.id}</td>
                <td>{element.name}</td>
            </tr>
        });

        return <div>
            <MyInputComponent elemanEklendi={(inputValue) => this.elemanEklendiHandler(inputValue)}></MyInputComponent>
            <button onClick={() => this.retrieveNextData()}>Hey</button>
            <table border="1">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
                {tableRows}
                </thead>
            </table>
        </div>
    }

    elemanEklendiHandler(inputValue) {
        let currentElement = [...this.state.elements];
        let newElement = {
            id: this.state.elements.length + 1,
            name: inputValue
        };
        currentElement.push(newElement);
        this.setState({
            elements: currentElement
        })
    }

    retrieveNextData() {
        axios.get("http://jsonplaceholder.typicode.com/todos/" + this.state.elements.length)
            .then((result) => {
                this.elemanEklendiHandler(result.data.title);
            });
    }
};

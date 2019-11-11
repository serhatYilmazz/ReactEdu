import React, {Component} from 'react';

export default class MyInputComponent extends Component{

    state = {
        inputValue: ""
    };

    render() {
        return (
            <div>
                İsim: <input value={this.state.inputValue} onChange={(e) => this.inputChange(e)}></input>
                <button onClick={() => this.props.elemanEklendi(this.state.inputValue)}>Ekle</button>
            </div>
        );
    }

    inputChange(e) {
        this.setState({
            inputValue: e.target.value
        });
    }
};

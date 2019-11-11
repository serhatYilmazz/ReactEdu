import React, {Component} from 'react';
import './MyComponent.css';

class MyComponent extends Component {

    state = {
        counter: 5
    };

    const
    d = {
        fontSize: this.state.counter
    };

    render() {
        return <div className="MyClass d"> This is the one {this.props.name} and {this.props.children} and {this.state.counter}

        <br/>
        <button onClick={() => this.incrementCount()}>Increment Count</button>
        </div>;

    }

    incrementCount() {
        this.setState({counter: ++this.state.counter})

    }
}

export default MyComponent;

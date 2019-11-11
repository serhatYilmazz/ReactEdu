import React from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import MyDataComponent from './table/MyDataComponent';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


function Home() {
    return <div>Home</div>;
}

function About() {
    return <div>About</div>;
}

function Child({match}) {
    return <div>{match.params.id}</div>;
}

function App() {
    return (
        <div className="App">
            <MyComponent name="VirtualDOM">Hey You</MyComponent>
            <MyDataComponent></MyDataComponent>

            <Router>
                <Link to="/">Home</Link> <br/>
                <Link to="/about">About</Link><br/>
                <Link to="/child/1">Child 1</Link><br/>
                <Link to="/child/2">Child 2</Link><br/>

                <Route exact path="/" component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/child/:id" component={Child}></Route>
            </Router>
        </div>
    );
}

export default App;

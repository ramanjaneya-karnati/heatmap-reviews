import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

import MapOne from "./MapOne";
import MapTwo from "./MapTwo";
import Home from "./Home";

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to={'/'} className="nav-link"> Home </Link></li>
                        <li><Link to={'/map-one'} className="nav-link">MapOne</Link></li>
                        <li><Link to={'/map-two'} className="nav-link">MapTwo</Link></li>
                    </ul>
                </nav>
                <hr/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/map-one' component={MapOne}/>
                    <Route path='/map-two' component={MapTwo}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

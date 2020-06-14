import React, { Component } from 'react';
import HeatMap from "./HeatMap";

class Home extends Component {
    render() {
        return (
            <div>
                <h2>Home Page</h2>
                <HeatMap lat="36.0395" long="-114.9817"/>
            </div>
        );
    }
}

export default Home;

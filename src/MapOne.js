import React, {Component} from 'react';
import HeatMap from "./HeatMap";
import Reviews from './components/reviews'
import {Locations} from "./ServiceAreaLocations";

class MapOne extends Component {
    render() {
        return (
        <>
            <div >
              <pre>MapOne.js</pre>
                <h2>Map One</h2>
                <h3 className="text-container">Summerlin, NV</h3>
                {/* Update Latitude and Longitude */}
                <HeatMap lat="36.1887732" long="-115.3632522"/>
            </div>
            <Reviews lat="36.1887732" long="-115.3632522" radius="5miles"  city={Locations.SUMMERLIN.city} state={Locations.SUMMERLIN.state}/>
            </>
        );
    }
}

export default MapOne;

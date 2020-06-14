import React, { Component } from 'react';
import HeatMap from "./HeatMap";
import Reviews from './components/reviews'
import {Locations} from './ServiceAreaLocations';


class MapTwo extends Component {

    render() {
        return (
          <>
            <div>
              <pre>MapTwo.js</pre>
                <h3 className="text-container">Henderson, NV</h3>
                {/* Update Latitude and Longitude */}
                <HeatMap lat="35.9688713" long="-114.9898346" radius="5miles"/>
            </div>
            <Reviews lat="35.9688713" long="-114.9898346" radius="5miles"  city={Locations.HENDERSON.city} state={Locations.HENDERSON.state}/>
            </>
        );
    }
}

export default MapTwo;

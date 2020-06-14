import React, {Component} from 'react';
import Helmet from 'react-helmet';
import './App.css'

export default class HeatMap extends Component {

    state = {mapLoaded: false};

    componentDidMount() {
        this.setState({mapLoaded: true})
    }

    render() {
        return (
            <>
                <span id="lat_span" value={this.props.lat}></span>
                <span id="lng_span" value={this.props.long}></span>
                {
                    this.state.mapLoaded && (
                        <Helmet>
                            <script type={'text/javascript'}>
                                var sf = '4cbcb86c-04ae-4949-af96-cd39efb25ab9';
                                var gmak = 'AIzaSyCixT0iG2HZkTOLWBd2EKAWEpFK27dn8P0';
                                var zl = 10;
                                var lat = document.getElementById('lat_span').getAttribute('value');
                                var lng = document.getElementById('lng_span').getAttribute('value');
                                var showmap = true;
                                var scrollw = false;
                                var mapStyle = [];
                            </script>
                            <link href="http://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.0.3/css/bootstrap.css"
                                  rel="stylesheet"/>
                            <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
                            <link href="https://d2gwjd5chbpgug.cloudfront.net/v3/css/nnplugin.min.css" rel="stylesheet"
                                  type="text/css"/>
                            <script src="https://d2gwjd5chbpgug.cloudfront.net/v3/scripts/heatmap.min.js"></script>
                            <script type="text/javascript"
                                    src="https://d2gwjd5chbpgug.cloudfront.net/v4.1/scripts/nn_serviceareareviewscombo.min.js"
                            ></script>
                        </Helmet>)
                }
                <div id="nn-review-map-main" className="nn-map-small"></div>

            </>
        )
    }
}

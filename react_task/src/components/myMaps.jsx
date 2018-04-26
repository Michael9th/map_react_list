import React, { Component } from 'react';

import styles from "../components/myMaps.css";
 
//const MY_API_KEY = "AIzaSyAW_1rlpljmMPfr03W7p-k6nBNHSKqPrFM"

import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";

class MapWithAMarker extends Component {
    render() {
        return(
                <GoogleMap
                    defaultZoom={8}
                    defaultCenter={{ lat: this.props.address.lat, lng: this.props.address.lng }}
                    center={{ lat: this.props.address.lat, lng: this.props.address.lng }}
                >
                    <Marker
                        position={{ lat: this.props.address.lat, lng: this.props.address.lng }}
                    />
                </GoogleMap>

        )
    }
}

export default withScriptjs(withGoogleMap(MapWithAMarker))

import React from 'react';
import { connect } from "react-redux";
import PlaceAdd from '../components/PlaceAdd.jsx';
import PlacesList from '../components/PlacesList.jsx';
import MapWithAMarker from '../components/myMaps.jsx';
import { setLocation, setCurrentLocation, deleteLocation } from "../actions";

import './PlacesApp.css';

class PlacesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: []
        }
    }

    handlePlaceDelete = placeId => {
        const str = localStorage.getItem("str") ? JSON.parse(localStorage.getItem("str")) : [];
        const res = str.filter(place => place.place_id !== placeId);
        const toSave = JSON.stringify(res);

        localStorage.setItem('str', toSave);

    };

    handlePlaceAdd(newPlace) {
        this.setState(
            { address: [newPlace, ...this.state.address] },
            localStorage.setItem("places", JSON.stringify(this.state.address))
        );
    };

    render() {
        return (
            <div className="global-container">
                <div className="app">
                    <h2 className="app__header">Places Application</h2>
                    <PlaceAdd onPlaceAdd={this.handlePlaceAdd} setLocation={this.props.setLocation} />
                </div>
                <div className="map-list-container">
                    <div className="listPosition">
                        <PlacesList
                            addresses={this.props.addresses}
                            deleteLocation={this.handlePlaceDelete}
                            setCurrentLocation={this.props.setCurrentLocation}
                        />
                    </div>
                    <div className="mapPostion">
                        <MapWithAMarker
                            googleMapURL="https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAW_1rlpljmMPfr03W7p-k6nBNHSKqPrFM&address=${this.state.address}"
                            // googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAW_1rlpljmMPfr03W7p-k6nBNHSKqPrFM&v=3.exp&libraries=geometry,drawing,places"
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `500px`, width: `100%` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                            address={this.props.currentAddress}
                        />
                    </div>


                </div>

            </div>
        );
    }
}

export default connect(state => state, { setLocation, setCurrentLocation, deleteLocation })(PlacesApp);

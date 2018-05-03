import React, { Component } from 'react';

import Place from './Place.jsx';


export default class PlacesList extends Component {
    render() {

        const str = localStorage.getItem("str") ? JSON.parse(localStorage.getItem("str")) : [];
        const mapData = str.map((item, index) => (<li key={`li-${index}`} className="collection-item"><Place onPlaceDelete={this.props.deleteLocation} setCurrentLocation={this.props.setCurrentLocation} key={index} coord={item.coord} address={item.placeName} placeId={item.place_id}/></li>));

        return (
                <ul className="collection">
                    {mapData}
                </ul>
        );
    }
}

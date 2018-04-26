import React, { Component } from 'react';

import './Place.css';

export default class Place extends Component {
    constructor(props) {
        super(props);
    }

    handleDelete = () => {
        this.props.onPlaceDelete(this.props.placeId);
    };

    showOnMap = () => {
        this.props.setCurrentLocation(this.props.coord);
    };

    render() {
        return (
            <div onClick={this.showOnMap}>
                <span onClick={this.handleDelete}> × </span>
                { this.props.address }
            </div>
        );
    }
};

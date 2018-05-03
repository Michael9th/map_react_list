import React, { Component } from 'react';

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
                <a className="waves-effect waves-light btn-small" onClick={this.handleDelete}>Del</a>
                <span>{ this.props.address }</span>
            </div>
        );
    }
};

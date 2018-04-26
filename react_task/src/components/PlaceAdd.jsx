import React, { Component } from 'react';

import './PlaceAdd.css';

export default class PlaceAdd extends Component {
    constructor() {
        super();

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handlePlaceAdd = this.handlePlaceAdd.bind(this);
    }

    state = {
        address: ""
    };

    handleTextChange(event) {
        this.setState({
            address: event.target.value
        });
    }

    resetState() {
        this.setState({
            address: ''
        });
    }

    handlePlaceAdd() {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAW_1rlpljmMPfr03W7p-k6nBNHSKqPrFM&address=${this.state.address}`, {
            method: 'POST',
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'OK') {
                    let addresses = localStorage.getItem("str") ? JSON.parse(localStorage.getItem("str")) : [];
                    const place = {
                        place_id: data.results[0].place_id,
                        placeName: data.results[0].formatted_address,
                        coord: data.results[0].geometry.location,
                    };

                    addresses = addresses.concat(place);
                    localStorage.setItem("str", JSON.stringify(addresses));

                    this.props.setLocation(place, data.results[0].geometry.location);
                }
            })
            .catch(err => console.error(err));
        this.resetState();
    }

    handleKeyDown(e) {
        if (e.keyCode === 13 ) {
            this.handlePlaceAdd();
        }
    }


    render() {
        return (
            <div className="editor">
                <input
                    className="editor__textarea"
                    type="text"
                    placeholder="Enter your address here..."
                    value={this.state.address}
                    onChange={this.handleTextChange}
                    onKeyDown={this.handleKeyDown}
                />
            </div>
        );
    }
}

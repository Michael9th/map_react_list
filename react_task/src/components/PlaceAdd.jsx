import React, { Component } from 'react';
import { fetchLocation } from "../actions";
import { connect } from "react-redux";

import './PlaceAdd.css';

class PlaceAdd extends Component {
    constructor() {
        super();

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handlePlaceAdd = this.handlePlaceAdd.bind(this);
        this.state = { address: "" };
    }

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
        this.props.fetchLocation(this.state.address);
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

export default connect(state => state, { fetchLocation })(PlaceAdd);

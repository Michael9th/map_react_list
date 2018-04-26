import React, { Component } from 'react';
import Masonry from 'react-masonry-component';

import Place from './Place.jsx';


export default class PlacesList extends Component {
    render() {

        const masonryOptions = {
            columnWidth: 250,
            gutter: 10,
            isFitWidth: true
        };

        const str = localStorage.getItem("str") ? JSON.parse(localStorage.getItem("str")) : [];
        const mapData = str.map((item, index) => (<Place onPlaceDelete={this.props.deleteLocation} setCurrentLocation={this.props.setCurrentLocation} key={index} coord={item.coord} address={item.placeName} placeId={item.place_id}/>));

        return (
            <div style={{width: 200, height: 200}}>
                <Masonry
                    className='grid'
                    options={masonryOptions}
                >
                    <div>
                        {mapData}
                    </div>
                </Masonry>
            </div>
        );
    }
}


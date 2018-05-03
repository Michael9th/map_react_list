
export const setLocation = (name, address) => {
    return {
        type: 'GET_SUCCESS_LOCATION',
        payload: { name, address }
    };
};

export const setCurrentLocation = coord => {
    return {
        type: 'SET_LOCATION',
        payload: { coord }
    };
};

export const deleteLocation = locId => {
    return {
        type: 'DELETE_LOCATION',
        payload: { locId }
    };
};

export const fetchLocation = address => dispatch => {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAW_1rlpljmMPfr03W7p-k6nBNHSKqPrFM&address=${address}`, {
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

                dispatch(setLocation(place, data.results[0].geometry.location));
            }
        })
        .catch(err => console.error(err));
    // return {
    //     type: 'GET_FETCH',
    //     payload: { getFromFetch }
    // }

    };
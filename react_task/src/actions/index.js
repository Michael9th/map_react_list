
export const setLocation = (name, address) => {
    return {
        type: 'GET_SUCCESS_LOCATION',

        name,
        address
    };
};

export const setCurrentLocation = coord => {
    return {
        type: 'SET_LOCATION',
        coord
    };
};

export const deleteLocation = locId => {
    return {
        type: 'DELETE_LOCATION',
        locId
    };
};

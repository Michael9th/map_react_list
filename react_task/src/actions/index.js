
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

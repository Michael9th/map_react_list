const isAddresses = !!localStorage.getItem('str') ? JSON.parse(localStorage.getItem('str')) : [];

const initialState = {
    currentAddress: {lat: 34, lng: 43},
    addresses: isAddresses,
};


export default function address(state = initialState, action) {
    switch (action.type) {
        case 'GET_SUCCESS_LOCATION': {
            const newAddresses = state.addresses.concat(action.name);
            return {
                currentAddress: action.address,
                addresses: newAddresses
            };
        }

        case 'SET_LOCATION': {
            return { ...state, currentAddress: action.coord };
        }

        case 'DELETE_LOCATION': {
            const state = localStorage.getItem("str") ? JSON.parse(localStorage.getItem("str")) : [];
            return state;
        }

        default: {
            return state;
        }
    }
};

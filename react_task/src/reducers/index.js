const isAddresses = !!localStorage.getItem('str') ? JSON.parse(localStorage.getItem('str')) : [];

const initialState = {
    currentAddress: {lat: 34, lng: 43},
    addresses: isAddresses,
};


export default function address(state = initialState, action) {
    switch (action.type) {
        case 'GET_SUCCESS_LOCATION': {
            const newAddresses = state.addresses.concat(action.payload.name);
            return {
                currentAddress: action.payload.address,
                addresses: newAddresses
            };
        }

        case 'SET_LOCATION': {
            return { ...state, currentAddress: action.payload.coord };
        }

        case 'DELETE_LOCATION': {
            const state = localStorage.getItem("str") ? JSON.parse(localStorage.getItem("str")) : [];
            return state;
        }

        case 'GET_FETCH': {
            return {...state}
        }

        default: {
            return state;
        }
    }
};

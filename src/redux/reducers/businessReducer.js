const initialState = {
    currentBusiness: null,
}

export default (state = initialState, action) => {
    switch(action.type) {
        case "SET_CURRENT_BUSINESS":
            return {...state, currentBusiness: action.playload}

        default: 
            return state;
    }
}
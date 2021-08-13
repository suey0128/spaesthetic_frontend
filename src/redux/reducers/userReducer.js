const initialState = {
    currentUser: null,
}

export default (state = initialState, action) => {
    switch(action.type) {
        case "SET_CURRENT_USER":
            return {...state, currentUser: action.playload}

        default: 
            return state;
    }
}
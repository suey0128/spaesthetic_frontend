const initialState = {
    ccProfileEditBody: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case "SET_CC_PROFILE_EDIT_BODY":
            return {...state, ccProfileEditBody: action.playload}

        default: 
            return state;
    }
}
const initialState = {
    ccProfileEditBody: null,
    contentCreatorArr: [],
    needFetchCC:false,
    viewingCC: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case "SET_CC_PROFILE_EDIT_BODY":
            return {...state, ccProfileEditBody: action.playload }

        case "SET_CONTENT_CREATOR_ARR":
            return {...state, contentCreatorArr: action.playload }

        case "NEED_FETCH_CC":
            return {...state, needFetchCC: !(state.needFetchCC)}
        
        case "SET_VIEWING_CC":
            return {...state, viewingCC: action.playload}

        default: 
            return state;
    }
}
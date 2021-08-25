const initialState = {
    currentBusiness: null,
    businessProfileEditBody: null,
    viewingBusiness: null,
    fetchViewingBusiness: false,
}

export default (state = initialState, action) => {
    switch(action.type) {
        case "SET_CURRENT_BUSINESS":
            return {...state, currentBusiness: action.playload}

        case "SET_BUSINESS_PROFILE_EDIT_BODY":
            return {...state, businessProfileEditBody: action.playload }
        
        case "SET_VIEWING_BUSINESS":
            return {...state, viewingBusiness: action.playload }

        case "FETCH_VIEWING_BUSINESS":
            return {...state, fetchViewingBusiness: !(state.fetchViewingBusiness) }

        default: 
            return state;
    }
}
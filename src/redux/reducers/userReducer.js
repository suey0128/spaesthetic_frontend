const initialState = {
    currentUser: null,
    needFetchUser: true,
}

export default (state = initialState, action) => {
    switch(action.type) {
        case "SET_CURRENT_USER":
            return {...state, currentUser: action.playload}
            
        case "NEED_FETCH_USER":
            return {...state, needFetchUser: !(state.needFetchUser)}

        default: 
            return state;
    }
}
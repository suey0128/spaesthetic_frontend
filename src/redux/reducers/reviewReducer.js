const initialState = {
    openReviewForm: false,
}

export default (state = initialState, action) => {
    switch(action.type) {
        case "OPEN_REVIEW_FORM":
            return {...state, openReviewForm: action.playload}


        default: 
            return state;
    }
}
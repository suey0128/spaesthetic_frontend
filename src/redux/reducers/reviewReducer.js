const initialState = {
    openReviewForm: false,
    // RatingOnDisplay: 5,
}

export default (state = initialState, action) => {
    switch(action.type) {
        case "OPEN_REVIEW_FORM":
            return {...state, openReviewForm: action.playload}

        // case "SET_RATING_ON_DISPLAY":
        //     return {...state, RatingOnDisplay: action.playload}


        default: 
            return state;
    }
}
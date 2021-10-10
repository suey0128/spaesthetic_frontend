const initialState = {
    openReviewForm: false,
    // ratingOnDisplay: null,
    // reviewContentOnDisplay:'',
    reviewList:[],
}

export default (state = initialState, action) => {
    switch(action.type) {
        case "OPEN_REVIEW_FORM":
            return {...state, openReviewForm: action.playload}

        // case "SET_RATING_ON_DISPLAY":
        //     return {...state, ratingOnDisplay: action.playload}

        // case "SET_REVIEW_CONTENT_ON_DISPLAY":
        //     return {...state, reviewContentOnDisplay: action.playload}

        case "SET_REVIEW_LIST":
            return {...state, reviewList: action.playload}

        default: 
            return state;
    }
}
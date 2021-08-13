
const initialState = {
    campaignArr: [],
    count: 10
}

export default (state = initialState, action) => {
    switch(action.type) {
        case "SET_CAMPAIGN_ARR":
            // console.log(action.playload)
            return {...state, campaignArr: action.playload}
        case "INCREASE_COUNT":
            return { ...state, count: state.count +1 };
        default: 
            return state;
    }
}


const initialState = {
    campaignArr: [],
    openCurrentCampaignList: false,
    // filteredCampaignArr: [],
}

export default (state = initialState, action) => {
    switch(action.type) {
        case "SET_CAMPAIGN_ARR":
            // console.log(action.playload)
            return {...state, campaignArr: action.playload};
        
        case "OPEN_CURRENT_CAMPAIGN_LIST":
            return {...state, openCurrentCampaignList: action.playload};
        
        // case "SET_FILTERED_CAMPAIGN_ARR":
        //     return {...state, filteredCampaignArr: action.playload};

        default: 
            return state;
    }
}

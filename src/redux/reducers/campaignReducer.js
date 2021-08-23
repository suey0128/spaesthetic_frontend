
const initialState = {
    campaignArr: [],
    campaignOnDisplay: [],
    openCurrentCampaignList: false,
    campaign:null,
    needFetchCampaignArr: true,
    needFetchCampaign: true,
    // filteredCampaignArr: [],
}

export default (state = initialState, action) => {
    switch(action.type) {
        case "SET_CAMPAIGN_ARR":
            return {...state, campaignArr: action.playload};
        
        case "SET_CAMPAIGN_ON_DISPLAY":
            return {...state, campaignOnDisplay: action.playload};

        case "OPEN_CURRENT_CAMPAIGN_LIST":
            return {...state, openCurrentCampaignList: action.playload};

        case "SET_CAMPAIGN":
            return {...state, campaign: action.playload};

        case "NEED_FETCH_CAMPAIGN_ARR":
            return {...state, needFetchCampaignArr: !(state.needFetchCampaignArr)};

        case "NEED_FETCH_CAMPAIGN":
            return {...state, needFetchCampaign: !(state.needFetchCampaign)};
    
        // case "SET_FILTERED_CAMPAIGN_ARR":
        //     return {...state, filteredCampaignArr: action.playload};

        default: 
            return state;
    }
}

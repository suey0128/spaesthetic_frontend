const initialState = {
    notificationArr: [],
    unreadNotificationNum: null,
    isOnLandingPage: false,
}

export default (state = initialState, action) => {
    switch(action.type) {
        case "SET_NOTIFICATION_ARR":
            return {...state, notificationArr: action.playload }
    
        case "SET_UNREAD_NOTIFICATION_NUM":
            return {...state, unreadNotificationNum: action.playload }

        case "SET_IS_ON_LANDING_PAGE":
            return {...state, isOnLandingPage: action.playload }

        default: 
            return state;
    }
}
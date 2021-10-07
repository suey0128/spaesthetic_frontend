const initialState = {
    notificationArr: [],
    unreadNotificationNum: null,
    isOnLandingPage: false,
    showSidebar: false,
    isNotificationRead: false,
}

export default (state = initialState, action) => {
    switch(action.type) {
        case "SET_NOTIFICATION_ARR":
            return {...state, notificationArr: action.playload }
    
        case "SET_UNREAD_NOTIFICATION_NUM":
            return {...state, unreadNotificationNum: action.playload }

        case "SET_IS_ON_LANDING_PAGE":
            return {...state, isOnLandingPage: action.playload }

        case "SET_SHOW_SIDEBAR":
            return {...state, showSidebar: action.playload }
        
        case "SET_IS_NOTIFICATION_READ":
            return {...state, isNotificationRead: action.playload } 
               
        default: 
            return state;
    }
}
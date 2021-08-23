const initialState = {
    notificationArr: [],
    unreadNotificationNum: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case "SET_NOTIFICATION_ARR":
            return {...state, notificationArr: action.playload }
    
        case "SET_UNREAD_NOTIFICATION_NUM":
            return {...state, unreadNotificationNum: action.playload }

        default: 
            return state;
    }
}
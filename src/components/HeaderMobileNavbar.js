import React from 'react'
import {NavLink} from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

import {useDispatch, useSelector} from 'react-redux';

const HeaderMobileNavbar = () => {
    const dispatch = useDispatch();


    return (
        <aside>
            <div className="sidebar-close-icon">
                <CloseIcon onClick={()=>{dispatch({ type: "SET_SHOW_SIDEBAR", playload: false})}}/>
            </div>

            {/* <div className="sidebar-menu">
                <NavLink to="/profile" 
                         className="nav-link" 
                         style={{ textDecoration: 'none' }} 
                         activeStyle={{fontWeight: "bold"}}
                         onClick={()=>{dispatch(setShowSidebar(false))}}
                         >
                    Profile
                </NavLink>
                <NavLink to="/matches"                         
                         className="nav-link" 
                         style={{ textDecoration: 'none' }} 
                         activeStyle={{fontWeight: "bold"}}
                         onClick={()=>{dispatch(setShowSidebar(false))}}
                         >
                    Matches
                </NavLink>
                <NavLink to="/events" 
                        className="nav-link" 
                        style={{ textDecoration: 'none' }} 
                        activeStyle={{fontWeight: "bold"}}
                        onClick={()=>{dispatch(setShowSidebar(false))}}
                        >
                    Events
                </NavLink>
            </div>

            <div className="sidebar-logout-wrap">
                <NavLink exact to="/" style={{ textDecoration: 'none' }}>
                    <button className="logout" onClick={handleLogout}>Logout</button>
                </NavLink>
            </div> */}
 
        </aside>
    )
}

export default HeaderMobileNavbar

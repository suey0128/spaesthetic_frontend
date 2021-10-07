import React from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

import {useDispatch, useSelector} from 'react-redux';

const HeaderMobileNavbar = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const currentUser = useSelector((state) => state.userReducer.currentUser);

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => {
          history.push('/')
          dispatch({ type: "SET_CURRENT_USER", playload: null})
          dispatch({ type: "SET_SHOW_SIDEBAR", playload: false})
        });
      }

    const closeMenu = () => {
        dispatch({ type: "SET_SHOW_SIDEBAR", playload: false})
    }

    return (
        <aside className="mobile-navbar">
            <div className="sidebar-close-icon">
                <CloseIcon onClick={closeMenu} style={{'fill': '#f4e7dc'}}/>
            </div>

            <div className="sidebar-menu">
            {currentUser ? 
            (currentUser.platform_user_type === "ContentCreator" ? 
            <>
                <div className="nav-link-mobile">
                    <NavLink to='/ccprofile' style={{ textDecoration: 'none' }} activeStyle={{ fontWeight: "bold"}} onClick={closeMenu}>      
                        <p>Profile</p>
                    </NavLink> 
                    <NavLink to='/cccurrentcollab' style={{ textDecoration: 'none' }} activeStyle={{ fontWeight: "bold"}} onClick={closeMenu}>                 
                        <p>Current Collabs</p>
                    </NavLink>          
                </div>
                <div className="sidebar-logout-wrap">
                    <NavLink exact to="/" style={{ textDecoration: 'none' }}>
                        <button className="login-out-btn" onClick={handleLogout}>Logout</button>
                    </NavLink>
                </div>
            </> 
            :
            <>
                <div className="nav-link-mobile">
                    <NavLink to='/businessprofile' style={{ textDecoration: 'none' }} activeStyle={{ fontWeight: "bold"}} onClick={closeMenu}>      
                        <p>Profile</p>
                    </NavLink> 
                    <NavLink to='/businesscurrentcampaign' style={{ textDecoration: 'none' }} activeStyle={{ fontWeight: "bold"}} onClick={closeMenu}>                 
                        <p>Current campaigns</p>
                    </NavLink>     
                    <NavLink to='/campaignform' style={{ textDecoration: 'none' }} activeStyle={{ fontWeight: "bold"}} onClick={closeMenu}>                 
                        <p>post new campaign</p>
                    </NavLink>         
                </div>
                <div className="sidebar-logout-wrap">
                    <NavLink exact to="/" style={{ textDecoration: 'none' }}>
                        <button className="login-out-btn" onClick={handleLogout}>Logout</button>
                    </NavLink>
                </div>
            </>
            ) :
            (
            <>
                <div className="nav-link-mobile">
                    <NavLink to='/ccsignup' style={{ textDecoration: 'none' }} activeStyle={{ fontWeight: "bold"}} onClick={closeMenu}>
                    <p>Content Creator Sign Up</p>
                    </NavLink>
                    <NavLink to='/businesssignup' style={{ textDecoration: 'none' }} activeStyle={{ fontWeight: "bold"}} onClick={closeMenu}>
                    <p>Business Sign Up</p>
                    </NavLink>
                </div>
                <div className="sidebar-logout-wrap">
                    <NavLink to='/login' >
                    <button className="login-out-btn" onClick={closeMenu}>Login</button>
                    </NavLink>
                </div>
            </>
            )       
            }
            </div>

        </aside>
    )
}

export default HeaderMobileNavbar

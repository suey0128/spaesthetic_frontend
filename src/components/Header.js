import HeaderBadge from './HeaderBadge';

import RoomIcon from '@material-ui/icons/Room';
import MenuIcon from '@material-ui/icons/Menu';

import {  useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';

function Header() {

  const currentUser = useSelector((state) => state.userReducer.currentUser);
  const dispatch = useDispatch();
  const history = useHistory();

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => {
      history.push('/')
      dispatch({ type: "SET_CURRENT_USER", playload: null})
    });
  }

  function openMenu() {
    dispatch({ type: "SET_SHOW_SIDEBAR", playload: true})
  }



  return (
    <nav className="header">
      <div className="header-left">
        <NavLink to='/' style={{ textDecoration: 'none' }}>
          <h2 id="logo">Spaesthetic</h2>
        </NavLink>

        <div className="header-geo-div">
          <RoomIcon style={{ fill: "#f4e7dc" }}/>
          <p>Los Angeles</p>  
        </div>
      </div>

      {currentUser === null ? 
      <>
      <div className="nav-bar">
        <NavLink to='/ccsignup' style={{ textDecoration: 'none' }} activeStyle={{ fontWeight: "bold"}}>
          <p>Content Creator<br></br>Sign Up</p>
        </NavLink>
        <NavLink to='/businesssignup' style={{ textDecoration: 'none' }} activeStyle={{ fontWeight: "bold"}}>
          <p>Business<br></br>Sign Up</p>
        </NavLink>
        <NavLink to='/login' >
          <button className="login-out-btn">Login</button>
        </NavLink>
      </div>

        <div className='mobile-nav-menu-icon'> 
          <MenuIcon style={{ fill: "#f4e7dc" }} onClick={openMenu}/>
        </div>
      </> 
      : 
      (currentUser.platform_user_type === "ContentCreator" ? 
      <>
        <div className="nav-bar">
          <HeaderBadge />
          <NavLink to='/ccprofile' style={{ textDecoration: 'none' }} activeStyle={{ fontWeight: "bold"}}>      
            <p>Profile</p>
          </NavLink> 
          <NavLink to='/cccurrentcollab' style={{ textDecoration: 'none' }} activeStyle={{ fontWeight: "bold"}}>                 
            <p>Current Collabs</p>
          </NavLink>           
          <button onClick={handleLogout} className="login-out-btn">logout</button>
        </div>

        <div className='mobile-nav-menu-icon'> 
          <HeaderBadge className="header-badge"/>
          <MenuIcon style={{ fill: "#f4e7dc" }} onClick={openMenu}/>
        </div>     
        </>   
      :
      <>
        <div className="nav-bar">
          <HeaderBadge />
          <NavLink to='/businessprofile' style={{ textDecoration: 'none' }} activeStyle={{ fontWeight: "bold"}}>      
            <p>Profile</p>
          </NavLink> 
          <NavLink to='/businesscurrentcampaign' style={{ textDecoration: 'none' }} activeStyle={{ fontWeight: "bold"}}>                 
            <p>Current<br></br>campaigns</p>
          </NavLink>     
          <NavLink to='/campaignform' style={{ textDecoration: 'none' }} activeStyle={{ fontWeight: "bold"}}>                 
            <p>post<br></br>new campaign</p>
          </NavLink>         
          <button onClick={handleLogout} className="login-out-btn">logout</button>
        </div>

          <div className='mobile-nav-menu-icon'> 
            <HeaderBadge />
            <MenuIcon style={{ fill: "#f4e7dc" }} onClick={openMenu}/>
          </div>     
        </>
      )}
      
    </nav>
  );
}

export default Header;
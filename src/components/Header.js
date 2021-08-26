import HeaderBadge from './HeaderBadge'

import RoomIcon from '@material-ui/icons/Room';

import {  useSelector, useDispatch } from 'react-redux'
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
  // console.log(currentUser)




  return (
    <div className="header">
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
      : 
      (currentUser.platform_user_type === "ContentCreator" ? 
        <div className="nav-bar">
          <NavLink to='/ccprofile' style={{ textDecoration: 'none' }} activeStyle={{ fontWeight: "bold"}}>      
            <p>Profile</p>
          </NavLink> 
          <NavLink to='/cccurrentcollab' style={{ textDecoration: 'none' }} activeStyle={{ fontWeight: "bold"}}>                 
            <p>Current Collabs</p>
          </NavLink>           
          <HeaderBadge />
          <button onClick={handleLogout} className="login-out-btn">logout</button>
        </div>
      :
        <div className="nav-bar">
          <NavLink to='/businessprofile' style={{ textDecoration: 'none' }} activeStyle={{ fontWeight: "bold"}}>      
            <p>Profile</p>
          </NavLink> 
          <NavLink to='/businesscurrentcampaign' style={{ textDecoration: 'none' }} activeStyle={{ fontWeight: "bold"}}>                 
            <p>Current<br></br>campaigns</p>
          </NavLink>     
          <NavLink to='/campaignform' style={{ textDecoration: 'none' }} activeStyle={{ fontWeight: "bold"}}>                 
            <p>post<br></br>new campaign</p>
          </NavLink>         
          <HeaderBadge />
          <button onClick={handleLogout} className="login-out-btn">logout</button>
        </div>
      )}
      

    </div>
  );
}

export default Header;
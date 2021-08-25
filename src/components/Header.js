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
        <RoomIcon />
        <p>Los Angeles</p>  
      </div>


      
      </div>

      {currentUser === null ? 
      <div className="nav-bar">
        <NavLink to='/ccsignup'>
          <p>Content Creator<br></br>Sign Up</p>
        </NavLink>
        <NavLink to='/businesssignup'>
          <p>Business<br></br>Sign Up</p>
        </NavLink>
        <NavLink to='/login'>
          <button>Login</button>
        </NavLink>
      </div>
      : 
      (currentUser.platform_user_type === "ContentCreator" ? 
        <div className="nav-bar">
          <NavLink to='/ccprofile'>      
            <p>Profile</p>
          </NavLink> 
          <NavLink to='/cccurrentcollab'>                 
            <p>Current Collabs</p>
          </NavLink>           
          <HeaderBadge />
          <button onClick={handleLogout}>logout</button>
        </div>
      :
        <div className="nav-bar">
          <NavLink to='/businessprofile'>      
            <p>Profile</p>
          </NavLink> 
          <NavLink to='/businesscurrentcampaign'>                 
            <p>Current<br></br>campaigns</p>
          </NavLink>     
          <NavLink to='/campaignform'>                 
            <p>post<br></br>new campaign</p>
          </NavLink>         
          <HeaderBadge />
          <button onClick={handleLogout}>logout</button>
        </div>
      )}
      

    </div>
  );
}

export default Header;
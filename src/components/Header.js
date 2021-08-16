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
      dispatch({ type: "SET_CURRENT_USER", playload: null})
      history.push('/')
    });
  }
  console.log(currentUser)




  return (
    <div className="header">
      <NavLink to='/' style={{ textDecoration: 'none' }}>
        <h2 id="logo">Spaesthetic</h2>
      </NavLink>
      
      {currentUser === null ? 
      <div className="nav-bar">
        <NavLink to='/ccsignup'>
          <p>Content Creator Sign Up</p>
        </NavLink>
        <NavLink to='/businesssignup'>
          <p>Business Sign Up</p>
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
            <p>Current Collab</p>
          </NavLink>           
          <button onClick={handleLogout}>logout</button>
        </div>
      :
        <div className="nav-bar">
          <NavLink to='/businessprofile'>      
            <p>Profile</p>
          </NavLink> 
          <NavLink to='/businesscurrentcampaign'>                 
            <p>Current campaign</p>
          </NavLink>     
          <NavLink to='/campaignform'>                 
            <p>post new campaign</p>
          </NavLink>           
          <button onClick={handleLogout}>logout</button>
        </div>
      )}
      

    </div>
  );
}

export default Header;
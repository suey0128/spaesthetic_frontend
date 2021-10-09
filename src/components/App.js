import '../assets/App.css';
import Header from './Header';
import BusinessSignUp from './business/BusinessSignUp'
import CCSignUp from './cc/CCSignUp'
import Login from './Login';
import HomePage from './homepage/HomePage'
import BusinessDetail from'./business/BusinessDetail'
import CCCurrentCollabList from './cc/CCCurrentCollabList'
import CCProfile from './cc/CCProfile'
import CampaginDetail from './CampaginDetail'
import CCDetail from './cc/CCDetail'
import BusinessCurrentCampaignList from './business/BusinessCurrentCampaignList'
import BusinessProfile from './business/BusinessProfile'
import CampaignForm from './forms_and_cards/CampaignForm'
import CCProfileEditForm from './cc/CCProfileEditForm'
import BusinessProfileEditForm from './business/BusinessProfileEditForm'
import Footer from './Footer';
import HeaderMobileNavbar from './HeaderMobileNavbar';

import { 
  BrowserRouter as Router,
  Switch, 
  Route
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect } from "react";


function App() {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.userReducer.currentUser);
  const needFetchUser = useSelector((state) => state.userReducer.needFetchUser);
  const isOnLandingPage = useSelector((state) => state.otherReducer.isOnLandingPage)
  const showSidebar = useSelector((state) => state.otherReducer.showSidebar)

  useEffect(() => {
    // auto-login
    fetch("http://localhost:3000/me", 
    {
      credentials: "include"
    }
    ).then((r) => {  //get '/me/' => 'users#show' in routes.rb
      if (r.ok) {
        r.json().then((userData) => {
          dispatch({ type: "SET_CURRENT_USER", playload: userData})
        });
      }
    });
  }, [needFetchUser]);

  return (
    <div className="App">
      <Router>
        {isOnLandingPage ?  null 
        :
        <>
          <Header />
          {showSidebar ? 
          <HeaderMobileNavbar /> 
          : null
          }
          </>
        }
        <div className='app-container'>
        <Switch>

          <Route exact path="/">
            <HomePage />
          </Route> 

          <Route path="/ccsignup">
            <CCSignUp />
          </Route>

          <Route path="/businesssignup">
            <BusinessSignUp />
            </Route>

          <Route path="/login">
            <Login />
          </Route>

        {currentUser ? 
        <>
              <Route path="/businessdetail/:id">
                  <BusinessDetail />
                </Route>

                <Route path="/cccurrentcollab">
                  <CCCurrentCollabList />
                </Route>

                <Route path="/ccprofile">
                  <CCProfile />
                </Route>

                <Route path="/ccprofileedit">
                  <CCProfileEditForm />
                </Route>

                <Route path="/ccdetail/:id">
                  <CCDetail />
                </Route>

                <Route path="/businesscurrentcampaign">
                  <BusinessCurrentCampaignList />
                </Route>

                <Route path="/businessprofile">
                  <BusinessProfile />
                </Route>

                <Route path="/campaignform">
                  <CampaignForm />
                </Route>

                <Route path="/businessprofileedit">
                  <BusinessProfileEditForm />
                </Route>

            <Route path="/campaigndetail/:id">
              <CampaginDetail />
            </Route>
            </>
           : <p>Please Login or Sign Up</p>
        }
        </Switch>
        </div>
        {isOnLandingPage ?  null : <Footer />}

      </Router>
    </div>
  );
}

export default App;

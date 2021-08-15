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
import NewCampaignForm from './forms_and_cards/NewCampaignForm'
import CCProfileEditForm from './cc/CCProfileEditForm'
import BusinessProfileEditForm from './business/BusinessProfileEditForm'
import Footer from './Footer'

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

  useEffect(() => {
    // auto-login
    // fetch('/users/1',
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
  }, []);

  console.log("currentUerInApp", currentUser)

  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>

          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/businessdetail">
            <BusinessDetail />
          </Route>

          <Route path="/cccurrentcollab">
            <CCCurrentCollabList />
          </Route>

          <Route path="/ccprofile">
            <CCProfile />
          </Route>

          <Route path="/campaigndetail">
            <CampaginDetail />
            </Route>

          <Route path="/ccdetail">
            <CCDetail />
            </Route>

          <Route path="/businesscurrentcampaign">
            <BusinessCurrentCampaignList />
          </Route>

          <Route path="/businessprofile">
            <BusinessProfile />
          </Route>

          <Route path="/newcamaignform">
            <NewCampaignForm />
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

          <Route path="/ccprofileedit">
            <CCProfileEditForm />
          </Route>

          <Route path="/businessprofileedit">
            <BusinessProfileEditForm />
          </Route>

        </Switch>
          
        <Footer />

      </Router>
    </div>
  );
}

export default App;

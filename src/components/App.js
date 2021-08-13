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
import Footer from './Footer'

import { 
  BrowserRouter as Router,
  Switch, 
  Route
} from "react-router-dom";


function App() {
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

          <Route path="/cccurrentcollablist">
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

          <Route path="/businesscurrentcollablist">
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

          <Route path="/businesssign">
            <BusinessSignUp />
            </Route>

          <Route path="/login">
            <Login />
          </Route>

        </Switch>
          
        <Footer />

      </Router>
    </div>
  );
}

export default App;

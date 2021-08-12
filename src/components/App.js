import '../assets/App.css';
import Header from './Header';
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


function App() {
  return (
    <div className="App">
      <h2>Hello</h2>
      <Header />

      <HomePage />

      <BusinessDetail />

      <CCCurrentCollabList />

      <CCProfile />

      <CampaginDetail />

      <CCDetail />

      <BusinessCurrentCampaignList />

      <BusinessProfile />

      <NewCampaignForm />

      <Footer />

    </div>
  );
}

export default App;

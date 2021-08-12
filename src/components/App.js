import '../assets/App.css';
import Header from './Header';
import HomePage from './homepage/HomePage'
import BusinessDetail from'./BusinessDetail'
import CCCurrentCollabList from './shared_components/CCCurrentCollabList'
import CCProfile from './ccprofile/CCProfile'

function App() {
  return (
    <div className="App">
      <h2>Hello</h2>
      <Header />

      <HomePage />

      <BusinessDetail />

      <CCCurrentCollabList />

      <CCProfile />

    </div>
  );
}

export default App;

import CCHP from "./CCHP";
import BusinessHP from "./BusinessHP";
// import { useSelector, useDispatch, useStore } from "react-redux";


function HomePage() {
    return (
      <div className="home-page">
        <h2>HomePage</h2>
        <CCHP />
        <BusinessHP />
      </div>
    );
  }
  
  export default HomePage;
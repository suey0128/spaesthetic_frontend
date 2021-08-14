import CCHP from "./CCHP";
import BusinessHP from "./BusinessHP";
import NoneUserHP from "./NoneUserHP";
import { useSelector} from "react-redux";



function HomePage() {
  const currentUser = useSelector((state) => state.userReducer.currentUser);

  const displayHP = (currentUser) =>{
    if (currentUser) {
      if (currentUser.platform_user_type === "ContentCreator") {
        return <CCHP />
      } else if (currentUser.platform_user_type === "Business") {
        return <BusinessHP />
      } 
    } else {
      return <NoneUserHP />
    }

  }


    return (
      <div className="homepage">
        <h2>HomePage</h2>
        {displayHP(currentUser)}
      </div>
    );
  }
  
  export default HomePage;
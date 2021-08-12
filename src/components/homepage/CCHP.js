import CCHPSearchAndSort from "./CCHPSearchAndSort";
import CCHPCampaignList from "./CCHPCampaignList";



function CCHP() {
    return (
      <div className="cchp">
        <h2>CCHP</h2>
        <CCHPSearchAndSort />
        <CCHPCampaignList />
      </div>
    );
  }
  
  export default CCHP;
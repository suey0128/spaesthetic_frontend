import BusinessCurrentCampaignList from "./BusinessCurrentCampaignList";
import BusinessPastCampaignList from './BusinessPastCampaignList';
import CollabReviewsOnBusiness from "./CollabReviewsOnBusiness"

function BusinessDetail() {
    return (
      <div className="BusinessDetail">
        <h2>BusinessDetail</h2>
        <BusinessCurrentCampaignList />
        <BusinessPastCampaignList />
        <CollabReviewsOnBusiness />
      </div>
    );
  }
  
  export default BusinessDetail;
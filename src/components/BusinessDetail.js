import BusinessCurrentCampaignList from "./shared_components/BusinessCurrentCampaignList";
import BusinessPastCampaignList from './shared_components/BusinessPastCampaignList';
import CollabReviewsOnBusiness from "./shared_components/CollabReviewsOnBusiness"

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
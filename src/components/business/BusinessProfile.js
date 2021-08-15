import BusinessProfileInfo from './BusinessProfileInfo'
import BusinessPastCampaignList from './BusinessPastCampaignList'
import CollabReviewsOnBusiness from './CollabReviewsOnBusiness'
import CollabReviewsWroteByBusiness from './CollabReviewsWroteByBusiness'

function BusinessProfile() {
    return (
      <div className="business-profile">
        <h2>BusinessProfile</h2>
        <BusinessProfileInfo />
        <BusinessPastCampaignList />
        <CollabReviewsOnBusiness /> 
        <CollabReviewsWroteByBusiness />

      </div>
    );
  }
  
  export default BusinessProfile;
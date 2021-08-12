import BusinessProfileEditForm from '../forms_and_cards/BusinessProfileEditForm'
import PasswordEditForm from '../forms_and_cards/PasswordEditForm'
import PaymentEditForm from '../forms_and_cards/PaymentEditForm'
import BusinessPastCampaignList from './BusinessCurrentCampaignList'
import CollabReviewsOnBusiness from './CollabReviewsOnBusiness'
import CollabReviewsWroteByBusiness from './CollabReviewsWroteByBusiness'

function BusinessProfile() {
    return (
      <div className="BusinessProfile">
        <h2>BusinessProfile</h2>
        <BusinessProfileEditForm />
        <PasswordEditForm />
        <PaymentEditForm />
        <BusinessPastCampaignList />
        <CollabReviewsOnBusiness />
        <CollabReviewsWroteByBusiness />

      </div>
    );
  }
  
  export default BusinessProfile;
import CollabReviewCard from '../forms_and_cards/CollabReviewCard'
import ReviewForm from '../forms_and_cards/ReviewForm'
import Grid from '@material-ui/core/Grid';

function CollabReviewsWroteByBusiness() {
    return (
      <div className="CollabReviewsWroteByBusiness">
        <h2>CollabReviewsWroteByBusiness</h2>
        <Grid container spacing={1}>
          <CollabReviewCard />                 
        </Grid>
        <ReviewForm />
      </div>
    );
  }
  
  export default CollabReviewsWroteByBusiness;
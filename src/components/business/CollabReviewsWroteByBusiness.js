import CollabReviewCard from '../forms_and_cards/CollabReviewCard'
import Grid from '@material-ui/core/Grid';

function CollabReviewsWroteByBusiness() {
    return (
      <div className="CollabReviewsWroteByBusiness">
        <h2>CollabReviewsWroteByBusiness</h2>
        <Grid container spacing={1}>
          <CollabReviewCard />                 
        </Grid>
      </div>
    );
  }
  
  export default CollabReviewsWroteByBusiness;
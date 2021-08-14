import CollabReviewCard from '../forms_and_cards/CollabReviewCard'
import Grid from '@material-ui/core/Grid';

function CollabReviewsOnBusiness() {
    return (
      <div className="CollabReviewsOnBusiness">
        <h2>CollabReviewsOnBusiness</h2>
        <Grid container spacing={1}>
          <CollabReviewCard />
        </Grid>
      </div>
    );
  }
  
  export default CollabReviewsOnBusiness;
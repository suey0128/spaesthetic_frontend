import CollabReviewCard from '../forms_and_cards/CollabReviewCard';

import Grid from '@material-ui/core/Grid';

import { useSelector } from 'react-redux'

function CollabReviewsOnCC() {

  const currentUser = useSelector((state) => state.userReducer.currentUser);
  if (currentUser === null) return <h2>Loading...</h2>;

    return (
      <div className="CollabReviewsOnCC">
        <h2>CollabReviewsOnCC</h2>
        <Grid container spacing={1}>
          {currentUser.reviews_on_me.length > 0 ? 
          currentUser.reviews_on_me.map(r=> <CollabReviewCard key={r.id} review={r}/>) 
          : 
          <h2>You don't have any review</h2>
          }
        </Grid>
      </div>
    );
  }
  
  export default CollabReviewsOnCC;
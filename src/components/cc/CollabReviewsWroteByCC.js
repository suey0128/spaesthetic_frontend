import CollabReviewCard from '../forms_and_cards/CollabReviewCard'
import Grid from '@material-ui/core/Grid';

import {useSelector, useDispatch} from 'react-redux' 

export default function CollabReviewsWroteByCC() {
  const dispatch = useDispatch();
  const openReviewForm = useSelector((state) => state.reviewReducer.openReviewForm)
  const currentUser = useSelector((state) => state.userReducer.currentUser);
  if (currentUser === null) return <h2>Loading...</h2>;

  return (
    <div className="CollabReviewsWroteByCC">
      <h2>CollabReviewsWroteByCC</h2>
        <Grid container spacing={1}>
        {currentUser.reviews_i_wrote.length > 0 ? 
        currentUser.reviews_i_wrote.map(r=> <CollabReviewCard key={r.id} review={r} showBtn={true}/>) 
        : 
        <h2>You don't have any review</h2>
        }
        </Grid>


    </div>
  );
}
  
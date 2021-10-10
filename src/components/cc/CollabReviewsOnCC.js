import CollabReviewCard from '../forms_and_cards/CollabReviewCard';

import Grid from '@material-ui/core/Grid';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

export default function CollabReviewsOnCC() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.userReducer.currentUser);
  const viewingCC = useSelector((state) => state.ccReducer.viewingCC);
  const reviewList = useSelector((state) => state.reviewReducer.reviewList);

  

  let party;
  if (viewingCC) {
    party = viewingCC
  } else {
    party = currentUser
  }
 
  useEffect(() => {
    if (!currentUser === null && viewingCC === null) return <h2>Loading...</h2>;

  },[])
  dispatch({ type: "SET_REVIEW_LIST", playload: party.reviews_on_me})

  return (
    <div className="CollabReviewsOnCC">
      <Grid container spacing={1}>
        {reviewList.length > 0 ? 
        reviewList.map(r=> <CollabReviewCard key={r.id} review={r} showBtn={false} />) 
        : 
        <h2>There isn't any review</h2>
        }
      </Grid>
    </div>
  );
}
import CollabReviewCard from '../forms_and_cards/CollabReviewCard';

import Grid from '@material-ui/core/Grid';

import { useSelector } from 'react-redux'

export default function CollabReviewsOnCC() {

  const currentUser = useSelector((state) => state.userReducer.currentUser);
  const viewingCC = useSelector((state) => state.ccReducer.viewingCC);

  if (!currentUser === null && viewingCC === null) return <h2>Loading...</h2>;

  let party;
  if (viewingCC) {
    party = viewingCC
  } else {
    party = currentUser
  }
 
  console.log('here')

  return (
    <div className="CollabReviewsOnCC">
      <Grid container spacing={1}>
        {party.reviews_on_me.length > 0 ? 
        party.reviews_on_me.map(r=> <CollabReviewCard key={r.id} review={r} showBtn={false}/>) 
        : 
        <h2>There isn't any review</h2>
        }
      </Grid>
    </div>
  );
}
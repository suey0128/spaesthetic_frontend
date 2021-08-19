import CollabReviewCard from '../forms_and_cards/CollabReviewCard';

import Grid from '@material-ui/core/Grid';

import { useSelector } from 'react-redux'

export default function CollabReviewsOnBusiness() {

  const currentUser = useSelector((state) => state.userReducer.currentUser);
  const viewingBusiness = useSelector((state) => state.businessReducer.viewingBusiness);

  if (!currentUser === null && viewingBusiness === null) return <h2>Loading...</h2>;

  let party;
  if (viewingBusiness) {
    party = viewingBusiness
  } else {
    party = currentUser
  }

  return (
    <div className="CollabReviewsOnCC">
      <h2>CollabReviewsOnBusiness</h2>
      <Grid container spacing={1}>
        {party.reviews_on_me.length > 0 ? 
        party.reviews_on_me.map(r=> <CollabReviewCard key={r.id} review={r} showBtn={false}/>) 
        : 
        <h2>You don't have any review</h2>
        }
      </Grid>
    </div>
  );
}
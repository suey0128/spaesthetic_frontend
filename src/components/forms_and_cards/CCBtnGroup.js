import Grid from '@material-ui/core/Grid';

import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';


export default function CCBtnGroup({ cc, handleOpen }) {
    const history = useHistory();
    //states
    const currentUser = useSelector((state) => state.userReducer.currentUser);

    if (!currentUser || !cc ) return <h2>Loading...</h2>;

    return (
        <Grid item xs={12} sm={3}>

            <button onClick={()=>{history.push(`/ccdetail/${cc.id}`)}} className="cc-btn-group-btns"
            >See Details</button>
            {   currentUser.current_campaigns.map(campaign => 
                campaign.invitees.filter((invitee)=> invitee.id === cc.id)).find(a => a.length === 0) ? 
                <button onClick={handleOpen} className="cc-btn-group-btns"
                >Invite</button> : null
            }
        </Grid>
    );
}
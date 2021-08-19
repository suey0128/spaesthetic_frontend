import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux'


const useStyles = makeStyles((theme) => ({
    avatar: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

export default function CampaignRelatedCC ({ campaign }) { 
    const classes = useStyles();
    const dispatch = useDispatch();
 
    if (campaign === null) return <h2>Loading campaign</h2>
  console.log(campaign)

    const handleHireClick =  (contentCreator) => {
      const newCollab = {
        content_creator_id: contentCreator.id,
        campaign_id: campaign.id
    }

    async function hire() {
        const res = await fetch(`/collabs`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(newCollab)
        });
        if (res.ok) {
            const data = await res.json(); // collab instance
            console.log('dataFromHire',data)
            dispatch({ type: "NEED_FETCH_USER"})
            dispatch({ type: "NEED_FETCH_CAMPAIGN_ARR"})
            dispatch({ type: "NEED_FETCH_CAMPAIGN"})
        } else {
            const err = await res.json();
            alert(err.errors)
        };
    }
    hire();
    }


    const handleCancelClick = (contentCreator)=> {
      const collabId = campaign.collabs.find(cl=>cl.content_creator_id === contentCreator.id).id
      async function cancelCollab () {
        const res = await fetch (`/collabs/${collabId}`, {method: 'DELETE'});
        if(res.ok){
            dispatch({ type: "NEED_FETCH_USER" })
        };
      };
      cancelCollab();
    }

    return (
        <Grid container spacing={1}>
            <Grid item xs={12} >
              <h5>Campaign Applicants</h5>
              <div className={classes.avatar}>
                  {campaign.applicants.length === 0 ? <p>You don't have any applicant for this campaign yet.</p> : null}
                  {campaign.applicants.map(c=> 
                    <div>
                    <Avatar key={c.id} alt={c.first_name} src={c.profile_pic} />
                    <button onClick={()=>{handleHireClick(c)}}>hire</button>
                    </div>
                  )}

              </div>
            </Grid>

            <Grid item xs={12} >
              <h5>Invited Content Creators</h5>
              <div className={classes.avatar}>
              {campaign.invitees.length === 0 ? <p>You don't have any invitee for this campaign yet.</p> : null}
              {campaign.invitees.map(c=> 
                <Avatar key={c.id} alt={c.first_name} src={c.profile_pic} />
              )}
              </div>
            </Grid>

            <Grid item xs={12} >
              <h5>Hired Content Creators</h5>
              <div className={classes.avatar}>
              {campaign.content_creators.length === 0 ? <p>You don't have any collaborator for this campaign yet.</p> : null}
              {campaign.content_creators.map(c=> 
               <div>
                <Avatar key={c.id} alt={c.first_name} src={c.profile_pic} />
                <button onClick={()=>{handleCancelClick(c)}}>cancel</button>
              </div>
              )}

              </div>
            </Grid>
        </Grid>
    );
}

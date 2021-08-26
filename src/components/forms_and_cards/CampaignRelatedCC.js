import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    avatar: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    large: {
      width: theme.spacing(6),
      height: theme.spacing(6),
    },
    container: {
      marginTop: theme.spacing(2),
      textAlign: 'left'
    },
    item: {
      marginBottom: theme.spacing(1),
    },
  }));

export default function CampaignRelatedCC ({ campaign }) { 
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
 
    if (campaign === null) return <h2>Loading campaign</h2>
  // console.log(campaign)

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

        <Grid container spacing={1} className={classes.container}>
            <Grid item xs={12} className={classes.item}>
              <h3>Campaign Applicants: </h3>
              <div className={classes.avatar}>
                  {campaign.applicants.length === 0 ? <p>You don't have any applicant for this campaign yet.</p> : null}
                  {campaign.applicants.map(c=> 
                    <div className="related-cc-avatar-btn-group">
                    <Avatar className={classes.large} key={c.id} alt={c.first_name} src={c.profile_pic} onClick={()=>history.push(`/ccdetail/${c.id}`)}/>
                    {new Date(campaign.end_date) > new Date() ?
                    <button className="related-cc-btn" onClick={()=>{handleHireClick(c)}}>hire</button> :null
                    }
                    </div>
                  )}

              </div>
              <Divider />
            </Grid>



            <Grid item xs={12} className={classes.item}>
              <h3>Invited Content Creators: </h3>
              <div className={classes.avatar}>
              {campaign.invitees.length === 0 ? <p>You don't have any invitee for this campaign yet.</p> : null}
              {campaign.invitees.map(c=> 
                <Avatar className={classes.large} key={c.id} alt={c.first_name} src={c.profile_pic} onClick={()=>history.push(`/ccdetail/${c.id}`)}/>
              )}
              </div>
              <Divider />
            </Grid>

            <Grid item xs={12} >
              <h3>Hired Content Creators: </h3>
              <div className={classes.avatar}>
              {campaign.content_creators.length === 0 ? <p>You don't have any collaborator for this campaign yet.</p> : null}
              {campaign.content_creators.map(c=> 
               <div className="related-cc-avatar-btn-group">
                <Avatar className={classes.large} key={c.id} alt={c.first_name} src={c.profile_pic} onClick={()=>history.push(`/ccdetail/${c.id}`)}/>
                {new Date(campaign.end_date) > new Date() ?
                  <button className="related-cc-btn" onClick={()=>{handleCancelClick(c)}}>cancel</button> : null
                }
              </div>
              )}

              </div>
            </Grid>
        </Grid>
    
    );
}

import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

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
    return (
        <Grid container spacing={1}>
            <Grid item xs={12} >
                <h5>Campaign Applicants</h5>
                <div className={classes.avatar}>
                    {/* {campaign.applicants.map(c=> <Avatar key={c.id} alt={c.first_name} src={c.profile_pic} />)} */}
                    <Avatar alt="Name" src="" />
                </div>
                </Grid>

                <Grid item xs={12} >
                <h5>Invited Content Creators</h5>
                <div className={classes.avatar}>
                {/* {campaign.invitees.map(c=> <Avatar key={c.id} alt={c.first_name} src={c.profile_pic} />)} */}
                <Avatar alt="Name" src="" />
                </div>
                </Grid>

                <Grid item xs={12} >
                <h5>Hired Content Creators</h5>
                <div className={classes.avatar}>
                {/* {campaign.content_creators.map(c=> <Avatar key={c.id} alt={c.first_name} src={c.profile_pic} />)} */}
                <Avatar alt="Name" src="" />
                </div>
                </Grid>
        </Grid>
    );
}

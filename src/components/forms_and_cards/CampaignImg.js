import Grid from '@material-ui/core/Grid';

export default function CampaignImg({ campaign }) {
    return (
        <Grid item xs={12} sm={3}>
            <img className="img-in-Campaign-card"
                src={campaign.image}
                alt={campaign.name}
            />
        </Grid>
    );
}
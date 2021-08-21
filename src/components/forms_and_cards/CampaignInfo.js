import Grid from '@material-ui/core/Grid';

export default function CampaignInfo({ campaign }) {

    return (
        <Grid item xs={12} sm={6}>
            <div className="info-in-Campaign-card">
                <h3>{campaign.name}</h3>
                <p>Hosted by: <a href={`/businessdetail/${campaign.business_id}`} >{campaign.business.name}</a></p>
                <p>location: {campaign.address} {campaign.city}</p>
                <p>compensation_type: {campaign.compensation_type}</p>
                <p>compensation_market_value:{campaign.compensation_market_value}</p>
                <p>campaign start date: {campaign.start_date}</p>
                <p>campaign end date: {campaign.end_date}</p>
                <p>apply by: {campaign.application_deadline}</p>
                <h4>requirement:</h4>
                <p>following minium: {campaign.require_following_minimum}</p>
                <p>gender: {campaign.require_gender}</p>
                <p>others: {campaign.require_others}</p>
                <p>details: {campaign.description}</p>
            </div>
        </Grid>
    );
}

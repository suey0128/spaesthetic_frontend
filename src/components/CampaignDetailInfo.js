
import Grid from '@material-ui/core/Grid';

export default function CampaignDetailInfo({ campaign }) {

    console.log(campaign)

    return (
        <Grid item xs={12} sm={6}>
            <div className="info-list">
                <h2>{campaign.name}</h2>
                <p>Hosted by: <a href={`/businessdetail/${campaign.business_id}`} >{campaign.business.name}</a></p>

                <br></br>
                <h4>About compensation</h4>
                <p>compensation type: {campaign.compensation_type}</p>
                <p>compensation market value:{campaign.compensation_market_value}</p>
                <br></br>
                <h4>About the event</h4>
                <p>Event location: {campaign.address} {campaign.city}</p>
                <p>campaign start date: {campaign.start_date}</p>
                <p>campaign end date: {campaign.end_date}</p>
                <br></br>
                <h4>Application</h4>
                <p>apply by: {campaign.application_deadline}</p>
                <br></br>
                <h4>Requirement:</h4>
                <p>following minium: {campaign.require_following_minimum}</p>
                <p>gender: {campaign.require_gender}</p>
                <p>others: {campaign.require_others}</p>
                <br></br>
                <h4>Post event requirement:</h4>
                <p>Must sent by: {campaign.content_sent_by}</p>
                <p>Must post by: {campaign.must_post_by}</p>

                <br></br>
                <h4>Details:</h4>
                <p> {campaign.description}</p>
            </div>
        </Grid>
    );
}

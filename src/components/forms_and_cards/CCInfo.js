import Grid from '@material-ui/core/Grid';

export default function CCInfo({ cc }) {

    return (
        <Grid item xs={12} sm={6}>
            <div className="info-in-Campaign-card">
                <p>{cc.first_name} {cc.last_name}</p>
                <a href={cc.website} > website</a> 
                <p>instagram: <a href={cc.instagram_url} >  {cc.instagram_username}</a></p>
                <p>Follower: {cc.instagram_follower}</p>
                <p>Female follow ratio: {cc.instagram_female_follower_ratio}%</p>
                <p>Top 1 followed location: {cc.instagram_top1_follow_location}</p>
                <p>About Me: </p>
                <p>{cc.about_me}</p>
            </div>
        </Grid>
    );
}

import Grid from '@material-ui/core/Grid';

export default function CCInfo({ cc }) {

    return (
        <Grid item xs={12} sm={6}>
            <div className="info-list">
                <h3>{cc.first_name} {cc.last_name}</h3>
                <br></br>
                <h4>Instagram Info</h4>
                <p>instagram: <a href={cc.instagram_url} >  {cc.instagram_username}</a></p>
                <p>Follower: {cc.instagram_follower}</p>
                <p>Female follow ratio: {cc.instagram_female_follower_ratio}%</p>
                <p>Top 1 followed location: {cc.instagram_top1_follow_location}</p>
                <br></br>
                <h4>Online presence</h4>
                <p>Website: <a href={cc.website} >  {cc.website}</a></p>
                <br></br>
                <h4>About {cc.first_name}: </h4>
                <p>{cc.about_me}</p>
            </div>
        </Grid>
    );
}

import Grid from '@material-ui/core/Grid';

export default function CCImg({ cc }) {
    return (
        <Grid item xs={12} sm={3}>
            <img className="img-in-Campaign-card"
                src={cc.profile_pic}
                alt={cc.name}
            />
        </Grid>
    );
}
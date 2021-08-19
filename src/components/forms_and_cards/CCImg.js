import Grid from '@material-ui/core/Grid';

export default function CCImg({ cc }) {
    return (
        <Grid item xs={12} sm={3}>
            <img className="img-in-Campaign-card"
                // src="https://cdn.vox-cdn.com/thumbor/vjciPYMEQy2ez9UIj_sksSOqC_4=/0x0:1000x667/1200x800/filters:focal(420x253:580x413)/cdn.vox-cdn.com/uploads/chorus_image/image/61171177/01_2013_ALFRED_COFFEE-3.0.0.1412833624.0.jpeg"
                src={cc.profile_pic}
                alt={cc.name}
            />
        </Grid>
    );
}
import CCCard from "./CCCard";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function BusinessHPCCList() {
  const classes = useStyles();

    return (
      <div className="BusinessHPCCList">
        <h2>BusinessHPCCList</h2>
        <Grid container spacing={1}>
          <CCCard />
        </Grid>
      </div>
    );
  }
  
  export default BusinessHPCCList;
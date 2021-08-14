// List wrapper 
import Grid from '@material-ui/core/Grid';


  <Grid container spacing={1}>
         
</Grid>


// in the card 

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
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

const classes = useStyles();

<Grid item xs={12}>
<Paper className={classes.paper}>  
paper
</Paper>
</Grid>
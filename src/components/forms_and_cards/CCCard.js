import CCInfo from './CCInfo';
import CCImg from './CCImg';
import CCBtnGroup from './CCBtnGroup';
import InvitationForm from "../forms_and_cards/InvitationForm";


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import Container from '@material-ui/core/Container';

import fetchPort from '../fetchPort';


const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    borderRadius:20,
  },
}));

export default function CCCard({ cc }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return (

      <Container component="main" maxWidth="lg" className={classes.container}>
        <Paper className={classes.paper} >
          <Grid container spacing={1} className="campaign-card">
 
            <CCImg cc={cc}/>

            <CCInfo cc={cc}/>

            <CCBtnGroup cc={cc} handleOpen={handleOpen}/>

          </Grid>

          <Modal
          open={open}
          onClose={handleClose}
          >
            <InvitationForm cc={cc} handleClose={handleClose}  />
        </Modal>
        </Paper> 
      </Container>

    );
  }
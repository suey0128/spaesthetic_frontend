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


import {useSelector, useDispatch} from 'react-redux' 


const useStyles = makeStyles((theme) => ({
  paper: {
    // margin: theme.spacing(1),
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius:20,
  },
}));

export default function CCCard({ cc }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return (

      <Container component="main" maxWidth="lg" className={classes.paper}>
        <Paper className={classes.paper} >
          <Grid container spacing={1} className="campaign-card">
 
            <CCImg cc={cc}/>

            <CCInfo cc={cc}/>

            <CCBtnGroup cc={cc} handleOpen={handleOpen}/>

          </Grid>

          <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          >
            <InvitationForm cc={cc} handleClose={handleClose}/>
        </Modal>
        </Paper> 
      </Container>

    );
  }
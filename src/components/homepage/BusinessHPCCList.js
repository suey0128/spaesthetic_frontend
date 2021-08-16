import CCCard from "../forms_and_cards/CCCard";
import InvitationForm from "../forms_and_cards/InvitationForm";

import React from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import {useSelector, useDispatch} from 'react-redux' 

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
  const dispatch = useDispatch();
  const openCurrentCampaignList = useSelector((state) => state.campaignReducer.openCurrentCampaignList)

  const handleClose = () => {
    dispatch({type: 'OPEN_CURRENT_CAMPAIGN_LIST', playload: false});
  };

    return (
      <div className="BusinessHPCCList">
        <h2>BusinessHPCCList</h2>
        <Grid container spacing={1}>
          <CCCard />
        </Grid>

        <Modal
          open={openCurrentCampaignList}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          >
            <InvitationForm />
        </Modal>
      </div>
    );
  }
  
  export default BusinessHPCCList;
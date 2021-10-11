import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {useSelector, useDispatch} from 'react-redux' 

// the fn that position the modal
function getModalStyle() {
  const top = 50 
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    width: '80%'
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 1000,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function InvitationForm({ cc, handleClose }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [modalStyle] = React.useState(getModalStyle);
  const currentUser = useSelector((state) => state.userReducer.currentUser);

  if (currentUser === null) return <h2>Loading campaign</h2>


  const handleInviteClick = (campaign) => {
    //POST a new invitation
    async function createNewInvite () {
      // const res = await fetch(`https://spaesthetic.herokuapp.com/invitations`, {
        const res = await fetch(`/invitations`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content_creator_id: cc.id, campaign_id:campaign.id })
      });
      if (res.ok) {
        const newInvite = await res.json();
        dispatch({ type: 'NEED_FETCH_USER' })
      } else {
        const err = await res.json()
        alert(err.errors)
      };
    }
    createNewInvite();
  }

  return (

      <div style={modalStyle} className={classes.paper}>
        <h2 className="simple-modal-title">{`Invite ${cc.first_name} to apply to your current campaigns`}</h2>
          
          {currentUser.current_campaigns.map(campaign => 
            campaign.invitees.find((invitee)=> invitee.id === cc.id) ? null :
            (<div className="invitation-form-item">
              <h3>{campaign.name}</h3>
              <button className="invitation-form-btn" onClick={()=>{handleInviteClick(campaign)}}>Invite</button>
            </div>)
          )}

          {
            currentUser.current_campaigns.filter(invitee => invitee.id === cc.id).length === currentUser.current_campaigns.length ?
            <h2>{`You have invite ${cc.first_name} to all your current campaigns`}</h2> : null
          }

          <button className="invitation-form-btn" onClick={handleClose}>Close Window</button>

      </div>

  );
  }
  
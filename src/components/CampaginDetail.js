
import React from 'react';
import Grid from '@material-ui/core/Grid';

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function CampaginDetail() {
  const dispatch = useDispatch();
  const history = useHistory();

  return (

    <Grid container spacing={1} className="campaign-detail-container">
      <Grid item xs={12} sm={3}>
        <div className="profile-img-and-uploads-btn">
            <img src="https://via.placeholder.com/280x350.png" alt="campaign image"/>
        </div>
      </Grid>

      <Grid item xs={12} sm={6}>
        <ul className="profile-info-list">
            <li>username</li>
            <li>first name last name</li>
            <li>gender</li>
            <li>email</li>
            <li>website</li>
            <li>Linked Instagram account</li>
            <li>Follower</li>
            <li>Male/Female follow ratio</li>
            <li>Top 1 followed location</li>
            <li>Avg rate for a campaign</li>
            <li>paypal account</li>
            <li>About me</li>
            <p>About me content</p>
        </ul>
      </Grid>

      <Grid item xs={12} sm={3}>
        <div className="profile-btn">
            <button >Apply</button>
            <button onClick={()=>{history.push('/campaignform')}}>Edit</button>
        </div>
      </Grid>


    </Grid>
  );
}
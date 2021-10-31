import CCCard from "../forms_and_cards/CCCard";

import React from 'react';
import Grid from '@material-ui/core/Grid';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import fetchPort from '../fetchPort';


function BusinessHPCCList() {

  const dispatch = useDispatch();
  const contentCreatorArr = useSelector((state) => state.ccReducer.contentCreatorArr)
  const needFetchCC = useSelector((state) => state.ccReducer.needFetchCC)

  //fetch all the cc
  useEffect(() => {
    fetch(`${fetchPort}/content_creators`, 
    ).then((r) => {  
      if (r.ok) {
        r.json().then((cc) => {
        dispatch({ type: "SET_CONTENT_CREATOR_ARR", playload: cc})
        });
      } else {
        alert(r.errors)
      }
    });
  }, [needFetchCC]);

   const filteredCCArr = contentCreatorArr

    return (
      <div className="BusinessHPCCList">
        <Grid container spacing={1}>
          {filteredCCArr.map(cc=> <CCCard key={cc.id} cc={cc}/>)}
        </Grid>


      </div>
    );
  }
  
  export default BusinessHPCCList;
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Grid from '@material-ui/core/Grid'

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import React from 'react';

import { useState, useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  outer: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    width:"100%",
    padding: '2px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '13px'
  },
  searchSortContainer: {
    textAlign: 'left',
    color: theme.palette.text.secondary,
    width:"100%",
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterContainer: {
    textAlign: 'left',
    color: theme.palette.text.secondary,
    width:"100%",
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'start',
    justifyContent: 'center',
  },
  gridItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    margin: theme.spacing(0),
    width: '95%',
    padding: '2px 8px',
    display: 'flex',
    alignItems: 'center',
    borderRadius:20,
    justifyContent: 'center',
  },
  sortBar: {
    margin: theme.spacing(0),
    width: '95%',
    padding: '5px 8px',
    justifyContent: 'center',
  },
  filter: {
    margin: theme.spacing(0),
    width: '95%',
    padding: '5px 8px',
    justifyContent: 'flex-start',
  }, 
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    padding: '2px 6px',
  },

}));

export default function CCHPSearchAndSort({ handleSearch, handleSort, handleSwitchChangeCompensation, handleSwitchChangeQualification }) {
  const classes = useStyles();
  const [input, inputSetter] = useState("")
  const [sortValue, sortValueSetter] = useState("")



  return (

    <Container component="main" maxWidth="lg" className={classes.outer}>

      <Grid container md={12} component="main" maxWidth="lg" className={classes.searchSortContainer}>
        {/* search bar */}
        <Grid item xs={12} md={6} className={classes.gridItem}>
        <Paper component="form" className={classes.searchBar} onSubmit={(e)=>{handleSearch(e, input)}}>
        
          <InputBase
            className={classes.input}
            placeholder="Search Content Creator Names or Descriptions"
            inputProps={{ 'aria-label': 'Search Content Creator Names or Descriptions' }}
            value={input}
            onChange={(e)=>{inputSetter(e.target.value)}}
          />

          <IconButton type="submit" className={classes.iconButton} aria-label="search" >
            <SearchIcon />
          </IconButton>
        
        </Paper>
        </ Grid >

        {/* sort bar */}
        <Grid item md={6} xs={12} className={classes.gridItem}>
          <FormControl  className={classes.sortBar}>
            <NativeSelect
              onChange={handleSort}
              name="sort"
              className={classes.selectEmpty}
              inputProps={{ 'aria-label': 'sort' }}
              style={{ 'color':'#6289a2' }}
              >
              <option value="created_at" >Newly posted</option>
              <option value="application_deadline">Application deadline</option>
              <option value="start_date">Campaign start date</option>
              <option value="end_date">Campaign end date</option>
              <option value="must_post_by">Content posting Deadline</option>
              <option value="content_sent_by">Content sending Deadline</option>
              <option value="compensation_market_value">Compensation market value</option>
            </NativeSelect>
          </FormControl>
        </ Grid >

      </ Grid>

      {/* filter */}
      <Grid container md={12}component="main" maxWidth="lg" className={classes.filterContainer}>
        <Grid item xs={12} md={6} className={classes.gridItem}>
            <FormGroup row className={classes.filter}>
              <h4 className='cchp-filter-title' >Compensation Type: </h4>

              <div className="cchp-filter-name">
                <FormControlLabel
                  control={<Switch  onChange={handleSwitchChangeCompensation} name="monetary" value="monetary" />} //color="primary" can be added 
                  label="monetary"
                  
                />

                <FormControlLabel
                  control={<Switch  onChange={handleSwitchChangeCompensation} name="service" value="service"/>} //color="primary" can be added 
                  label="service"
                />

                <FormControlLabel
                  control={<Switch  onChange={handleSwitchChangeCompensation} name="product" value="product"/>} //color="primary" can be added 
                  label="product"
                />

                <FormControlLabel
                  control={<Switch  onChange={handleSwitchChangeCompensation} name="others" value="others"/>} //color="primary" can be added 
                  label="others"
                />
              </div>
            </FormGroup>
          </ Grid>

        <Grid item xs={12} md={6} className={classes.gridItem}>
          <FormGroup row className={classes.filter}>
            <h4 className='cchp-filter-title'>Only show the campaign I'm qualified for (on paper 😉): </h4>

            <div className="cchp-filter-name">
              <FormControlLabel
                control={<Switch  onChange={handleSwitchChangeQualification} name="qualification" value="qualification"/>} //color="primary" can be added 
                label="qualification"
              />
            </div>
          </FormGroup>
        </ Grid>

      </Grid>

    </Container>

  );
  }

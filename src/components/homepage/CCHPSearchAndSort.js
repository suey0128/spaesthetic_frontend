import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

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
    padding: '2px 4px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '13px'
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    width:"100%",
    padding: '2px 4px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  filter: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    width:"100%",
    padding: '2px 4px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  root: {
    height: '100%',
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '50%',
    borderRadius:20,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  formControl: {
    margin: theme.spacing(1),
    width: '50%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    padding: '2px 6px',
  },
  Switch: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    }
  },
}));

export default function CCHPSearchAndSort({ handleSearch, handleSort, handleSwitchChangeCompensation, handleSwitchChangeQualification }) {
  const classes = useStyles();
  const [input, inputSetter] = useState("")
  const [sortValue, sortValueSetter] = useState("")



  return (

    <Container component="main" maxWidth="lg" className={classes.outer}>
      <Container component="main" maxWidth="lg" className={classes.paper}>
        {/* search bar */}
        <Paper component="form" className={classes.root} onSubmit={(e)=>{handleSearch(e, input)}}>
        
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

        {/* sort bar */}
        <FormControl className={classes.formControl}>
          <NativeSelect
            onChange={handleSort}
            name="sort"
            className={classes.selectEmpty}
            inputProps={{ 'aria-label': 'sort' }}
            >
            <option value="created_at">Newly posted</option>
            <option value="application_deadline">Application deadline</option>
            <option value="start_date">Campaign start date</option>
            <option value="end_date">Campaign end date</option>
            <option value="must_post_by">Content posting Deadline</option>
            <option value="content_sent_by">Content sending Deadline</option>
            <option value="compensation_market_value">Compensation market value</option>
          </NativeSelect>
        </FormControl>
      </ Container>

      {/* filter */}
      <Container component="main" maxWidth="lg" className={classes.filter}>
        <FormGroup row >
          <h3>Compensation Type: </h3>

          <div className="cchp-filter-name">
            <FormControlLabel
              control={<Switch  onChange={handleSwitchChangeCompensation} name="monetary" value="monetary"/>} //color="primary" can be added 
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

        {/* <h3>|</h3> */}

        <FormGroup row>
          <h3>Only show the campaign I'm qualified for (on paper 😉): </h3>

          <div className="cchp-filter-name">
            <FormControlLabel
              control={<Switch  onChange={handleSwitchChangeQualification} name="qualification" value="qualification"/>} //color="primary" can be added 
              label="qualification"
            />
          </div>
        </FormGroup>

      </Container>

    </Container>

  );
  }

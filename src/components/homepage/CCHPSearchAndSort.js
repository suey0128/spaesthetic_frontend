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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

import React from 'react';

import { useState, useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    width:"100%",
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
  },
  root: {
    height: '100%',
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '70%',
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
    width: '30%',
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
    },
  },
}));

export default function CCHPSearchAndSort({ handleSearch, handleSort, handleSwitchChangeCompensation, handleSwitchChangeQualification }) {
  const classes = useStyles();
  const [input, inputSetter] = useState("")
  const [sortValue, sortValueSetter] = useState("")



  return (

    <Container component="main" maxWidth="lg" className={classes.paper}>
      <div>
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
        inputProps={{ 'aria-label': 'age' }}
      >
        <option value="newPost">Newly posted</option>
        <option value="applyBy">Application deadline</option>
        <option value="startDate">Campaign start date</option>
        <option value="endDate">Campaign end date</option>
        <option value="mustPostBy">Content posting Deadline</option>
        <option value="mustSentBy">Content sending Deadline</option>
        <option value="compensationMarketValue">Compensation market value</option>
      </NativeSelect>
    </FormControl>
    </div>


      {/* filter */}
      <div>
        <FormGroup row>
          <p>Compensation Type: </p>

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
      
        </FormGroup>



        <FormGroup row>
          <p>Only show the campaign I'm qualified for (on paper 😉): </p>

        <FormControlLabel
          control={<Switch  onChange={handleSwitchChangeQualification} name="qualification" value="qualification"/>} //color="primary" can be added 
          label="qualification"
        />
        </FormGroup>

      </div>

    </Container>
  );
  }

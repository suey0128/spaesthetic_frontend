import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

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
}));

export default function BusinessHPSearchAndSort({ handleSearch, handleSort }) {
  const classes = useStyles();
  const [input, inputSetter] = useState("")
  const [sortValue, sortValueSetter] = useState("")


  return (

    <Container component="main" maxWidth="lg" className={classes.paper}>

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


    <FormControl className={classes.formControl}>
      <NativeSelect
        onChange={handleSort}
        name="sort"
        className={classes.selectEmpty}
        inputProps={{ 'aria-label': 'age' }}
      >
        <option value="luck">See my Luck</option>
        <option value="followLtoS">Following: large to small</option>
        <option value="followStoL">Following: small to large</option>
        <option value="femaleFollowLtoS">Female follower ratio: large to small</option>
        <option value="femaleFollowStoL">Male follower ratio: large to small</option>
        <option value="mostworkedWith">Most worked with</option>
        <option value="mostInvited">Most invited</option>
      </NativeSelect>
    </FormControl>

    </Container>
  );
  }

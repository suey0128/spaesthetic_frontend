import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
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
  searchSortContainer: {
    textAlign: 'left',
    color: theme.palette.text.secondary,
    width:"100%",
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
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
}));

export default function BusinessHPSearchAndSort({ handleSearch, handleSort }) {
  const classes = useStyles();
  const [input, inputSetter] = useState("")
  const [sortValue, sortValueSetter] = useState("")


  return (

    <Container component="main" maxWidth="lg" className={classes.outer}>
       <Grid container md={12} component="main" maxWidth="lg" className={classes.searchSortContainer}>
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
        </Grid>

        <Grid item xs={12} md={6} className={classes.gridItem}>
          <FormControl className={classes.sortBar}>
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
        </Grid>
      </Grid>
    </Container>
  );
  }

import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';


import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    marginTop: theme.spacing(1),
    width: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NewCampaignForm() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const [username, usernameSetter] = useState("")

  const currentUser = useSelector((state) => state.userReducer.currentUser);

  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [compensationType, compensationTypeSetter] = React.useState('');

  const handleChange = (event) => {
    compensationTypeSetter(event.target.value);
  };


  return (

    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          New Campaign
        </Typography>


        <form className={classes.form} noValidate >

        <Typography component="h6" >About the campaign</Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={3}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                value={username}
                onChange={(e)=>usernameSetter(e.target.value)}
              />
            </Grid>        
          <Grid item xs={12} sm={3}>
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="image"
                label="Image"
                name="image"
                autoComplete="image"
                autoFocus
                value={username}
                onChange={(e)=>usernameSetter(e.target.value)}
            />
          </Grid>    

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid item xs={12} sm={3}>
              <KeyboardDatePicker
                margin="normal"
                id="startDate"
                label="Start Date"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <KeyboardDatePicker
                margin="normal"
                id="endDate"
                label="End Date"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </Grid>
        </MuiPickersUtilsProvider>
        
          <Grid item xs={12} >
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="description"
                label="Description"
                name="description"
                autoComplete="description"
                autoFocus
                multiline
                rows={4}
                value={username}
                onChange={(e)=>usernameSetter(e.target.value)}
                />
          </Grid>
        </Grid>
        <br></br>

        <Typography component="h6" >About the location</Typography>
        <Grid container spacing={1}>

          <Grid item xs={12} >
            <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="address"
            label="Address"
            name="address"
            autoComplete="address"
            autoFocus
            value={username}
            onChange={(e)=>usernameSetter(e.target.value)}
            />
          </Grid>     

          <Grid item xs={12} sm={3}>
            <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="city"
            label="City"
            name="city"
            autoComplete="city"
            autoFocus
            value={username}
            onChange={(e)=>usernameSetter(e.target.value)}
            />
          </Grid>    

          <Grid item xs={12} sm={3}>
            <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="state"
            label="State"
            name="state"
            autoComplete="state"
            autoFocus
            value={username}
            onChange={(e)=>usernameSetter(e.target.value)}
            />
          </Grid>    

          <Grid item xs={12} sm={3}>
            <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="zip"
            label="Zip"
            name="zip"
            autoComplete="zip"
            autoFocus
            value={username}
            onChange={(e)=>usernameSetter(e.target.value)}
            />
          </Grid>    

          <Grid item xs={12} sm={3}>
            <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="country"
            label="Country"
            name="country"
            autoComplete="country"
            autoFocus
            value={username}
            onChange={(e)=>usernameSetter(e.target.value)}
            />
          </Grid>    
        </Grid>  
        <br></br>

        <Typography component="h6" >Compensation</Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="compensationType">Compensation Type</InputLabel>
              <Select
                labelId="compensationType"
                id="compensationType"
                value={compensationType}
                onChange={handleChange}
                label="compensationType"
              >
                <MenuItem value="money">Monetery</MenuItem>
                <MenuItem value="service">Service</MenuItem>
                <MenuItem value="product">Products</MenuItem>
                <MenuItem value="others">Others</MenuItem>
              </Select>
            </FormControl>
          </Grid>  

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth className={classes.formControl} variant="outlined">
              <InputLabel htmlFor="compensationMarketValue">Compensation Market Value</InputLabel>
              <OutlinedInput
                id="compensationMarketValue"
                value={username}
                onChange={handleChange}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                labelWidth={210}
              />
            </FormControl>
          </Grid>  
        </Grid>
        <br></br>

        <Typography component="h6" >Application requirements</Typography>
        <Grid container spacing={1}>
        <Grid item xs={12} sm={3}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="followingMinimum"
                label="Following Minimum"
                name="followingMinimum"
                autoComplete="followingMinimum"
                autoFocus
                value={username}
                onChange={(e)=>usernameSetter(e.target.value)}
              />
            </Grid>        
          <Grid item xs={12} sm={3}>
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="followingLocation"
                label="Main Followed Location"
                name="followingLocation"
                autoComplete="followingLocation"
                autoFocus
                value={username}
                onChange={(e)=>usernameSetter(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="femaleRatio"
                label="Follower Female Ratio"
                name="femaleRatio"
                autoComplete="femaleRatio"
                autoFocus
                value={username}
                onChange={(e)=>usernameSetter(e.target.value)}
              />
            </Grid>        
          <Grid item xs={12} sm={3}>
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="gender"
                label="Gender"
                name="gender"
                autoComplete="gender"
                autoFocus
                value={username}
                onChange={(e)=>usernameSetter(e.target.value)}
            />
          </Grid>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid item xs={12} sm={3}>
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Apply by"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
          <Grid item xs={12}>
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="requirementDetails"
                label="Requirement Details"
                name="requirementDetails"
                autoComplete="requirementDetails"
                autoFocus
                multiline
                rows={2}
                value={username}
                onChange={(e)=>usernameSetter(e.target.value)}
            />
          </Grid>          
        </Grid>
        <br></br>

        <Typography component="h6" >About Content</Typography>
        <Grid container spacing={1}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid item xs={12} sm={3}>
              <KeyboardDatePicker
                margin="normal"
                id="contentSentBy"
                label="Content Sent By"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <KeyboardDatePicker
                margin="normal"
                id="mustPostBy"
                label="Must Post By"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </Grid>
        </MuiPickersUtilsProvider>
        </Grid>
        <br></br>

        <Grid container spacing={1}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Post
            </Button>
        </Grid>
        </form>
      </div>
    </Container>



  );
}
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


import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

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

export default function CampaignForm() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.userReducer.currentUser);

  //state for the control form:
  const [name, nameSetter] = useState("")
  const [image, imageSetter] = useState("")
  const [startDate, startDateSetter] = useState(new Date());
  const [endDate, endDateSetter] = useState(new Date());
  const [description, descriptionSetter] = useState("")
  const [address,addressSetter] = useState("")
  const [city, citySetter] = useState("")
  const [state, stateSetter] = useState("")
  const [zip, zipSetter] = useState("")
  const [country, countrySetter] = useState("")
  const [compensationType, compensationTypeSetter] = useState("")
  const [compensationMarketValue, compensationMarketValueSetter] = useState("")
  const [followingMinimum, followingMinimumSetter] = useState("")
  const [followingLocation, followingLocationSetter] = useState("")
  const [followingFemaleRatio, followingFemaleRatioSetter] = useState("")
  const [ccGender,ccGenderSetter] = useState("")
  const [applyBy, applyBySetter] = useState(new Date());
  const [requirementDetails, requirementDetailsSetter] = useState("")
  const [contentSentBy, contentSentBySetter] = useState(new Date());
  const [mustPostBy, mustPostBySetter] = useState(new Date());

  let alternativeImg;
  if (image === "") {alternativeImg = "https://via.placeholder.com/280x350.png"}


  const handlePostNewCampaign = (e) => {
    e.preventDefault();
    //create new campaign instance.
    const newCampaign = { 
      business_id: currentUser.platform_user.id,
      name,
      image: alternativeImg,
      location_name: "",
      location_type: "",
      address,
      city,
      state,
      zip,
      country,
      compensation_type: compensationType,
      compensation_market_value: compensationMarketValue,
      start_date: startDate,
      end_date: endDate,
      application_deadline: applyBy,
      require_following_minimum: followingMinimum,
      require_following_location: followingLocation,
      require_following_female_ratio: followingFemaleRatio,
      require_gender: ccGender,
      require_others: requirementDetails,
      description, 
      content_sent_by: contentSentBy,
      must_post_by: mustPostBy
    }
    console.log(newCampaign)

    async function postCampaign() {
      const res = await fetch(`/campaigns`,{
          method: 'POST',
          // credentials: "include",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(newCampaign)
      });
      const userData = await res.json();
      if(res.ok){
          console.log(userData)
          //add the current user state to make the new campaign without refreshing 
          dispatch({ type: "NEED_FETCH_USER" })
          history.push('/businesscurrentcampaign')
      } else {
          alert(userData.errors)
      }
    }
    postCampaign();
  }



  return (

    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Campaign
        </Typography>


        <form className={classes.form} noValidate onSubmit={handlePostNewCampaign}>

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
                value={name}
                onChange={(e)=>nameSetter(e.target.value)}
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
                value={image}
                onChange={(e)=>imageSetter(e.target.value)}
            />
          </Grid>    

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid item xs={12} sm={3}>
              <KeyboardDatePicker
                margin="normal"
                id="startDate"
                label="Start Date"
                format="MM/dd/yyyy"
                value={startDate}
                onChange={startDateSetter}
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
                value={endDate}
                onChange={endDateSetter}
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
                value={description}
                onChange={(e)=>descriptionSetter(e.target.value)}
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
            value={address}
            onChange={(e)=>addressSetter(e.target.value)}
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
            value={city}
            onChange={(e)=>citySetter(e.target.value)}
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
            value={state}
            onChange={(e)=>stateSetter(e.target.value)}
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
            value={zip}
            onChange={(e)=>zipSetter(e.target.value)}
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
            value={country}
            onChange={(e)=>countrySetter(e.target.value)}
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
                onChange={(e)=>compensationTypeSetter(e.target.value)}
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
                value={compensationMarketValue}
                onChange={(e)=>compensationMarketValueSetter(e.target.value)}
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
                value={followingMinimum}
                onChange={(e)=>followingMinimumSetter(e.target.value)}
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
                value={followingLocation}
                onChange={(e)=>followingLocationSetter(e.target.value)}
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
                value={followingFemaleRatio}
                onChange={(e)=>followingFemaleRatioSetter(e.target.value)}
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
                value={ccGender}
                onChange={(e)=>ccGenderSetter(e.target.value)}
            />
          </Grid>

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid item xs={12} sm={3}>
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Apply by"
                format="MM/dd/yyyy"
                value={applyBy}
                onChange={applyBySetter}
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
                value={requirementDetails}
                onChange={(e)=>requirementDetailsSetter(e.target.value)}
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
                value={contentSentBy}
                onChange={contentSentBySetter}
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
                value={mustPostBy}
                onChange={mustPostBySetter}
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
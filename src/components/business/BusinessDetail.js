import BusinessDetailInfo from './BusinessDetailInfo'
import BusinessCurrentCampaignList from './BusinessCurrentCampaignList'
import BusinessPastCampaignList from './BusinessPastCampaignList'
import CollabReviewsOnBusiness from './CollabReviewsOnBusiness'

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import HistoryIcon from '@material-ui/icons/History';
import RateReviewIcon from '@material-ui/icons/RateReview';

import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function BusinessDetail() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const params = useParams();

  const [isLoaded, setIsLoaded] = useState(false)
  const [value, setValue] = useState(0);
  const isOnProfile = true;

  const fetchViewingBusiness = useSelector((state) => state.businessReducer.fetchViewingBusiness)

  //fetch campaign base on the id from the params
  useEffect(() => {
    dispatch({ type: "SET_IS_ON_LANDING_PAGE", playload: false})
    async function fetchBusiness(){
      // const res = await fetch (`https://spaesthetic.herokuapp.com/businesses/${params.id}`)
      const res = await fetch (`/businesses/${params.id}`)
      if (res.ok){
        const data = await res.json()
        dispatch({ type: "SET_VIEWING_BUSINESS", playload:data })
        setIsLoaded(true)
      }
    };
    fetchBusiness();
  },[fetchViewingBusiness])

  if (!isLoaded ) return <h2>Loading...</h2>;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (
      <div className="business-profile">
        <BusinessDetailInfo />

        <br></br>

        <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example"
          >
            <Tab label="Current Campaigns" icon={<EventAvailableIcon />} {...a11yProps(0)} />
            <Tab label="Past Campaigns" icon={<HistoryIcon />} {...a11yProps(1)} />
            <Tab label="Reviews" icon={<RateReviewIcon />} {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <BusinessCurrentCampaignList isOnProfile={isOnProfile}/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <BusinessPastCampaignList />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <CollabReviewsOnBusiness />
        </TabPanel>
      </div>

      </div>
    );
  }
  
  
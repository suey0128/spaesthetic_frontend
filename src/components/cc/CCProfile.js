import CCProfileInfo from "./CCProfileInfo";
import CCCurrentCollabList from "./CCCurrentCollabList";
import CCPastCollabList from "./CCPastCollabList"
import CCProfileApplied from "./CCProfileApplied"
import CCProfileInviteList from './CCProfileInviteList'
import CollabReviewsOnCC from './CollabReviewsOnCC'
import CollabReviewsWroteByCC from './CollabReviewsWroteByCC'

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import HistoryIcon from '@material-ui/icons/History';
import RateReviewIcon from '@material-ui/icons/RateReview';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import DescriptionIcon from '@material-ui/icons/Description';

import { useEffect} from 'react';
import { useDispatch } from 'react-redux';

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

function CCProfile() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch({ type: "SET_IS_ON_LANDING_PAGE", playload: false})
  },[])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <div className="cc-profile">
      <CCProfileInfo />

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
            <Tab label="Current Collabs" icon={<FavoriteIcon />} {...a11yProps(0)} />
            <Tab label="Past Collabs" icon={<HistoryIcon />} {...a11yProps(1)} />
            <Tab label="Collab Applied" icon={<DescriptionIcon />} {...a11yProps(2)} />
            <Tab label="Invited Me" icon={<LoyaltyIcon />} {...a11yProps(3)} />
            <Tab label="Reviews On Me" icon={<RateReviewIcon />} {...a11yProps(4)} />
            <Tab label="Reviews I Wrote" icon={<BorderColorIcon />} {...a11yProps(5)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <CCCurrentCollabList />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <CCPastCollabList />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <CCProfileApplied />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <CCProfileInviteList />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <CollabReviewsOnCC />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <CollabReviewsWroteByCC />
        </TabPanel>
      </div>
      
    </div>
  );
}
  
  export default CCProfile;
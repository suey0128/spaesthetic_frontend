import CCProfileInfo from "./CCProfileInfo";
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
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="cc-profile">
      <h2>CCProfile</h2>
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
            <Tab label="Item One" icon={<PhoneIcon />} {...a11yProps(0)} />
            <Tab label="Item Two" icon={<FavoriteIcon />} {...a11yProps(1)} />
            <Tab label="Item Three" icon={<PersonPinIcon />} {...a11yProps(2)} />
            <Tab label="Item Four" icon={<HelpIcon />} {...a11yProps(3)} />
            <Tab label="Item Five" icon={<ShoppingBasket />} {...a11yProps(4)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <CCPastCollabList />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <CCProfileApplied />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <CCProfileInviteList />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <CollabReviewsOnCC />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <CollabReviewsWroteByCC />
        </TabPanel>
      </div>
      
    </div>
  );
}
  
  export default CCProfile;
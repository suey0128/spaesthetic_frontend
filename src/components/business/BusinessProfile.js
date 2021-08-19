import BusinessProfileInfo from './BusinessProfileInfo'
import BusinessCurrentCampaignList from './BusinessCurrentCampaignList'
import BusinessPastCampaignList from './BusinessPastCampaignList'
import CollabReviewsOnBusiness from './CollabReviewsOnBusiness'
import CollabReviewsWroteByBusiness from './CollabReviewsWroteByBusiness'

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
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

export default function BusinessProfile() {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


    return (
      <div className="business-profile">
        <h2>BusinessProfile</h2>
        <BusinessProfileInfo />

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
            <Tab label="Current Campaigns" icon={<PhoneIcon />} {...a11yProps(0)} />
            <Tab label="Past Campaigns" icon={<PhoneIcon />} {...a11yProps(1)} />
            <Tab label="Reviews On Me" icon={<HelpIcon />} {...a11yProps(2)} />
            <Tab label="Reviews I Wrote" icon={<ShoppingBasket />} {...a11yProps(3)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <BusinessCurrentCampaignList />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <BusinessPastCampaignList />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <CollabReviewsOnBusiness />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <CollabReviewsWroteByBusiness />
        </TabPanel>
      </div>

      </div>
    );
  }
  
  
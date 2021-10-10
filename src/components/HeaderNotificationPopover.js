import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';

import { useSelector } from 'react-redux';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '40%',
  },
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },

}));

const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: 'red',
      color: 'red',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        border: '1px solid currentColor',
        content: '""',
      },
    },
  }))(Badge);

export default function HeaderNotificationPopover() {
  const classes = useStyles();
  const notificationArr = useSelector((state) => state.otherReducer.notificationArr);
  const unreadNotificationNum = useSelector((state) => state.otherReducer.unreadNotificationNum);

  if (!notificationArr ) return <h2>Loading...</h2>;

  return (
    <React.Fragment >
      <CssBaseline />
      <Paper square className={classes.paper}>
        <Typography className={classes.text} variant="h5" gutterBottom>
          Notifications
        </Typography>
        <List className={classes.list}>
          {notificationArr.map(({ id, content, read, source }) => (
            <React.Fragment key={id}>
              <ListItem >
                <ListItemAvatar>
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                    }}
                    // variant={read ? "standard" : "dot"}
                    variant={read || unreadNotificationNum === null ? "standard" : "dot"}
                >
                    <Avatar alt="Profile Picture" src={source.profile_pic} />
                </StyledBadge>
                </ListItemAvatar>
                <ListItemText primary="" secondary={content} />
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </React.Fragment>
  );
}
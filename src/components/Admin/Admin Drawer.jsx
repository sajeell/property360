import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from '../../static/WhatsApp Image 2019-10-08 at 2.07.00 PM.jpeg'
import '../../static/CompStyle.css'
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const ADrawer = () => {
  const classes = useStyles();
  return (
    <div className="admin-drawer-wrapper">

      <div className={classes.root}>
        <AppBar position="static" color="black">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <img src={logo} alt="logo" height="70px" width="200px" />
            </Typography>
            <Button color="inherit">Add</Button>
            <Button color="inherit">Edit</Button>
            <Button color="inherit">Modify</Button>
            <Button color="inherit">Profile</Button>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  )
}

export default ADrawer
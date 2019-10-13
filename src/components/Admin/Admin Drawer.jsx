import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import logo from '../../static/WhatsApp Image 2019-10-08 at 2.07.00 PM.jpeg'
import '../../static/CompStyle.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Add from './Admin Add.jsx'
import Delete from './Admin Delete.jsx'
import Modify from './Admin Modify.jsx'

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
}))

const ADrawer = () => {
  const classes = useStyles()

  return (
    <div className="admin-drawer-wrapper">
      <Router>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                <img src={logo} alt="logo" height="70px" width="200px" />
              </Typography>
              <Link to="/adminadd">
                <Button color="inherit">Add</Button>
              </Link>
              <Link to="/admindel">
                <Button color="inherit">Delete</Button>
              </Link>
              <Link to="/adminmodify">
                <Button color="inherit">Modify</Button>
              </Link>
              <Button color="inherit">Profile</Button>
            </Toolbar>
          </AppBar>
        </div>

        <Switch>
          <Route exact path="/adminadd">
            <Add />
          </Route>
          <Route exact path="/admindel">
            <Delete />
          </Route>
          <Route exact path="/adminmodify">
            <Modify />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default ADrawer

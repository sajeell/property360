import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import logo from '../../static/WhatsApp Image 2019-10-08 at 2.07.00 PM.jpeg'
import '../../static/CompStyle.css'

import Add from './AdminAdd.jsx'
import Delete from './AdminDelete.jsx'
import Modify from './AdminModify.jsx'
import Profile from './AdminProfile'

import ErrorPage from '../ErrorPage.jsx'

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

const AdminRouter = () => {
  const classes = useStyles()

  return (
    <div className="admin-drawer-wrapper">
      <Router>

      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <img src={logo} alt="logo" height="70px" width="200px" />
            </Typography>
            <Link to="/admin/add">
              <Button color="inherit">Add</Button>
            </Link>
            <Link to="/admin/del">
              <Button color="inherit">Delete</Button>
            </Link>
            <Link to="/admin/modify">
              <Button color="inherit">Modify</Button>
            </Link>
            <Link to="/admin/profile" color="inherit">
              Profile
            </Link>
          </Toolbar>
        </AppBar>
      </div>

      <Switch>
        <Route exact path="/admin">
          Hi
        </Route>
        <Route path="/admin/add">
          <Add />
        </Route>
        <Route path="/admin/del">
          <Delete />
        </Route>
        <Route path="/admin/modify">
          <Modify />
        </Route>
        <Route path="/admin/profile">
          <Profile />
        </Route>
        <Route path="*" component={ErrorPage} />
      </Switch>
    </Router>
    </div>
  )
}

export default AdminRouter

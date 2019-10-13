import React from 'react'
import '../../static/CompStyle.css'
import ASign from './AdminSign.jsx'
import ADrawer from './AdminDrawer.jsx'
import AHeader from './AdminHeader.jsx'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Error from '../Error.jsx'
const Admin = () => {
  return (
    <div className="admin-wrapper">
      <Router>
        <Route exact path="/admin">
          <ASign />
        </Route>
        <Route exact path="/adminportal"></Route>

        <ADrawer />

        <ADrawer />
        <AHeader />
        <Switch>
          <Route sensitive path="/asign"></Route>
          <Route component={Error} />

          <Route path="/">
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
export default Admin

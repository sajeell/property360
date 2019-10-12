import React from 'react'
import '../../static/CompStyle.css'
import ASign from './Admin Sign.jsx'
// import ADrawer from './Admin Drawer.jsx'
// import AHeader from './Admin Header.jsx'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ADrawer from './Admin Drawer'
// import Error from '../Error.jsx';
const Admin = () => {
  return (
    <div className="admin-wrapper">
      <Router>

        <Route exact path="/admin">
          <ASign />

        </Route>
        <Route exact path="/adminportal">
          <ADrawer />

        </Route>

      </Router>


      { /* 
        <ADrawer />
        <AHeader />
        <Switch>
          <Route exact path="/">
            <ASign />
          </Route>
          <Route sensitive path="/asign">
            
          </Route>
          <Route component={Error} />

          {/* 
                    <Route path="/">
                    <Error />
                </Route> 
        </Switch>*/}

    </div >
  )
}
export default Admin

import React from 'react'
import '../../static/CompStyle.css'
import ASign from './Admin Sign.jsx'
// import ADrawer from './Admin Drawer.jsx'
// import AHeader from './Admin Header.jsx'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Error from '../Error.jsx';
const Admin = () => {
  return (
    <div className="admin-wrapper">

      <ASign />
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

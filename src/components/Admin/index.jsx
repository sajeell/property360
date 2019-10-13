import React, { useState } from 'react'
import '../../static/CompStyle.css'
import AdminSign from './AdminSign.jsx'
import { Switch, Route, Redirect } from 'react-router-dom'
import Error from '../Error.jsx'

import * as authService from '../../services/auth'

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.hasUserToken())

  return (
    <div className="admin-wrapper">
      <Switch>
        {isLoggedIn ? (
          <>
            <Route sensitive path="/asign"></Route>
            <Route path="*" component={Error} />
          </>
        ) : (
          <>
            <Route path="/admin/login" render={() => <AdminSign onLogin={() => setIsLoggedIn(true)} />} />
            <Route path="*">
              <Redirect to="/admin/login" />
            </Route>
          </>
        )}
      </Switch>
    </div>
  )
}
export default Admin

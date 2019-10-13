import React, { useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import * as authService from '../../services/auth'
import AdminSign from './AdminSign.jsx'
import AdminRouter from './AdminRouter'

import '../../static/CompStyle.css'

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.hasUserToken())

  return (
    <div className="admin-wrapper">
      <Switch>
        {isLoggedIn ? (
          <AdminRouter />
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

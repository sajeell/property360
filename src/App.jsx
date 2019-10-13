import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Admin from './components/Admin'
import Landing from './components/Landing Page.jsx'
import { history } from './common'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="app-wrapper">
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
export default App

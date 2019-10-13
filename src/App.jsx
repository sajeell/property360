import React from 'react'
import './App.css'
import Admin from './components/Admin/Admin.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

import Landing from './components/Landing Page.jsx'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <div className="app-wrapper">
      <Router>
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

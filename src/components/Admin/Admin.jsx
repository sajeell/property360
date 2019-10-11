import React from 'react'
import '../../static/CompStyle.css'
import ASign from './Admin Sign.jsx'
// import ADrawer from './Admin Drawer.jsx'
import AHeader from './Admin Header.jsx'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ASignUp from './Admin SignUp.jsx';
// import Error from '../Error.jsx';
import Button from '@material-ui/core/Button'
const Admin = () => {
<<<<<<< HEAD
    return (
        <div className="admin-wrapper">
            <Router>

                <AHeader />

                <Button variant="outlined" color="primary" >
                    <Link to="/asignup" >Sign Up</Link>
                </Button>

                {/* <ADrawer /> */}
                <Switch>
                    <Route exact path="/" >
                        <ASign />
                    </Route>
                    <Route sensitive path="/asignup" >
                        <ASignUp />
                    </Route>
                    {/* <Route component={Error} /> */}

                    {/* 
                    <Route path="/">
                    <Error />
                </Route> */}
                </Switch>
            </Router>
        </div>
    )
}
export default Admin;
=======
  return (
    <div className="admin-wrapper">
      <AHeader />
      <ASign />
      {/* <ADrawer /> */}
    </div>
  )
}

export default Admin
>>>>>>> 7bea311e12cf00e8a8bf0bf30d8a7f2098ae07e5

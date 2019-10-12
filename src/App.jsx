// import React from 'react'
// import './App.css'
// import Admin from './components/Admin/Admin.jsx'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import Header from './components/Header.jsx'
// import VR from './components/VR.jsx'
// import Contact from './components/Contact.jsx'
// import Footer from './components/Footer.jsx'
// import Carouse from './components/Carousel.jsx'
// import LBottom from './components/Landing Bottom.jsx'
// import Middle from './components/Middle.jsx'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// function App() {
//   return (
//     <div className="app-wrapper">
//       <Router>


//         <Switch>
//           <Route exact path="/">
//             <Header />
//             <Carouse />
//             <Middle />
//             <p></p>
//             <h3 className="middle-text ">VR Platform </h3>
//             <VR />
//             <LBottom />
//             <Contact />
//             <Footer />
//           </Route>
//           <Route sensitive path="/admin">

//             <Admin />
//           </Route>
//         </Switch>


//       </Router>
//     </div>
//   )
// }
// export default App
import React from 'react'
import './App.css'
import Admin from './components/Admin/Admin.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Header from './components/Header.jsx'
// import VR from './components/VR.jsx'
// import Contact from './components/Contact.jsx'
// import Footer from './components/Footer.jsx'
// import Carouse from './components/Carousel.jsx'
// import LBottom from './components/Landing Bottom.jsx'
// import Middle from './components/Middle.jsx'
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
          <Route sensitive path="/admin">

            <Admin />
          </Route>
        </Switch>


      </Router>
    </div>
  )
}
export default App

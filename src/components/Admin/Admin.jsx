import React from 'react'
import '../../static/CompStyle.css'
import ASign from './Admin Sign.jsx'
// import ADrawer from './Admin Drawer.jsx'
import AHeader from './Admin Header.jsx'
const Admin = () => {
  return (
    <div className="admin-wrapper">
      <AHeader />
      <ASign />
      {/* <ADrawer /> */}
    </div>
  )
}

export default Admin

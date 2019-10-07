import React from 'react'
import '../static/CompStyle.css'
const Header = () => {
  return (
    <div className="header-wrapper">
      <div class="logo">
        <h3>Gulberg Greens</h3>
      </div>
      <input type="text" className="search-bar" placeholder="Search Land" />
      <div className="header-buttons">
        <button>Rent</button>
        <button>Purchase</button>
        <button>Sale</button>
      </div>
      <button className="admin-button">Admin Portal</button>
    </div>
  )
}

export default Header

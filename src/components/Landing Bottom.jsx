import React from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap'
const LBottom = () => {
  return (
    <div className="lbottom-wrapper">
      <p>Select Desired Area:</p>
      <DropdownButton id="dropdown-basic-button" title="Regions                 ">
        <Dropdown.Item href="#/action-1">Sector F</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Sector G</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Sector H</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Sector I</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Sector D</Dropdown.Item>
        <Dropdown.Item href="#/action-3">ChakShahzad</Dropdown.Item>
        <Dropdown.Item href="#/action-3">BharaKahu</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Bahria Town</Dropdown.Item>
      </DropdownButton>
    </div>
  )
}

export default LBottom

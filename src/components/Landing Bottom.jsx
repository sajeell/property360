import React from 'react'
import gql from 'graphql-tag.macro'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { useQuery } from '../apollo'

const LOCATIONS_QUERY = gql`
  query LocationsQuery {
    locations {
      id
      name
    }
  }
`

function LBottom() {
  const { data, loading, error } = useQuery(LOCATIONS_QUERY)

  if (error) {
    throw error
  }
  const locations = data ? data.locations : []

  return (
    <div className="lbottom-wrapper">
      <p>Select Desired Area:</p>
      <DropdownButton id="dropdown-basic-button" title="Regions">
        {locations.map(location => (
          <Dropdown.Item key={location.id} href="#/action-1">
            {location.name}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </div>
  )
}

export default LBottom

import React from 'react'
import gql from 'graphql-tag.macro'

import { useQuery } from '../../apollo'

const LISTING_QUERY = gql`
  query AdminProfileQuery {
    listings {
      id
      listingType {
        id
        name
      }
      location {
        id
        name
      }
      commerce
      description
    }
    viewer {
      name
    }
  }
`

function Profile() {
  const { data,error } = useQuery(LISTING_QUERY)
  if (error) {
    throw error
  }

  const listings = data ? data.listings : []

  return (
    <>
      <div>
        <div>User: {data ? data.viewer.name : null}</div>
        {listings.map(listing => (
          <div style={{}}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <span>{listing.listingType.name}</span>
              <span>{listing.location.name}</span>
              <span>{listing.commerce}</span>
              <span>{listing.description}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Profile

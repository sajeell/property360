import React from 'react'
import gql from 'graphql-tag.macro'
import { useQuery } from '../../apollo'

import '../../static/CompStyle.css'

const POP_UP_QUERY = gql`
  query PopupQuery($listingTypeId: ID) {
    listings(listingTypeId: $listingTypeId) {
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
export default function ApartmentPop({ listingTypeId }) {
  console.log('variables', {
    listingTypeId,
  })
  const { data, loading, error } = useQuery(POP_UP_QUERY, {
    variables: {
      listingTypeId,
    },
  })
  if (error) {
    throw error
  }

  const listings = data ? data.listings : []

  return (
    <div>
      <div>
        {listings.length > 0 ? (
          listings.map(listing => (
            <div className="pop-item-01 popup-add">
              <span>{listing.location.name}</span>
              <span>{listing.listingType.name}</span>
              <span>{listing.commerce}</span>
              <span>{listing.description}</span>
            </div>
          ))
        ) : (
          <img
            src={
              'https://www.totalparco.com.pk/sites/g/files/wompnd651/f/styles/paragraph_media_960/public/atoms/image/img_0463_1_0.jpg?itok=_IH5uICP'
            }
            height={'250'}
            width={'250'}
            alt="Plots not found"
          />
        )}
      </div>
    </div>
  )
}

import React from 'react'
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

const getSectorsQuery = gql`
  {
    sectors {
      name
    }
  }
`

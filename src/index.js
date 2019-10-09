import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient, { gql } from 'apollo-boost'
import { ApolloProvider, useQuery } from '@apollo/react-hooks'

import './index.css'
import App from './App.jsx'

ReactDOM.render(<App />, document.getElementById('root'))

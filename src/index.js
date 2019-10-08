import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient, { gql } from 'apollo-boost'
import { ApolloProvider, useQuery } from '@apollo/react-hooks'

import './index.css'
import App from './App.jsx'

const Apps = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app 🚀</h2>
    </div>
    <ExchangeRates />
  </ApolloProvider>
)

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
})

const EXCHANGE_RATES = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`

function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ))
}

ReactDOM.render(<Apps />, document.getElementById('root'))

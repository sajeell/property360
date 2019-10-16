import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'

import { getUserToken } from '../services/auth'

const cache = new InMemoryCache()
const link = new HttpLink({
  uri: 'http://localhost:8090/graphql',
})

const authlink = setContext((_, { headers }) => {
  const token = getUserToken()
  return {
    headers: {
      ...headers,
      'x-auth-token': token ? token : '',
    },
  }
})

const client = new ApolloClient({
  link: authlink.concat(link),
  cache: cache,
})

export default client

import * as React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

import 'antd/dist/antd.css'

const client = new ApolloClient({
  uri: 'http://127.0.0.1:8000/graphql',
  cache: new InMemoryCache(),
  credentials: 'include'
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)

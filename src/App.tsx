import React from 'react'
import { useQuery, gql } from '@apollo/client'
import TheHeader from './TheHeader'
import { AppQuery } from './generated/AppQuery'
import TheTable from './TheTable'

const PRODUCTS_QUERY = gql`
  query AppQuery($currentPage: Int!) {
    products(page: $currentPage, perPage: 5, sorters: {field: ID, order: DESC}) {
      ...Products
    }
    me {
      ...Me
    }
  }
  ${TheTable.fragments.products}
  ${TheHeader.fragments.me}
`

function App () {
  const [currentPage, setCurrentPage] = React.useState(1)

  const { loading, error, data } = useQuery<AppQuery>(PRODUCTS_QUERY, {
    variables: {
      currentPage
    }
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error !{error.message}</p>

  return (
    <div>
      <TheHeader me={data?.me}/>
      <TheTable data={data?.products} onCurrentPageChanged={setCurrentPage}/>
    </div>
  )
}

export default App

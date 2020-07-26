import React from 'react'
import { gql } from '@apollo/client'
import { Table } from 'antd'
import { TablePaginationConfig } from 'antd/lib/table'
import { Products } from './generated/Products'

type TheTableProps = {
  data: Products | undefined
  onCurrentPageChanged: (page: number) => any
}

function TheTable ({ data, onCurrentPageChanged }: TheTableProps) {
  const columns = [
    { title: 'ID', dataIndex: 'id' },
    { title: 'Имя', dataIndex: 'name' },
    { title: 'Категория', dataIndex: 'category' }
  ]

  if (data === undefined) {
    return (
      <Table
        columns={columns}
        dataSource={[]}
      />
    )
  }

  const pagination: TablePaginationConfig = {
    current: data.pageNumber,
    total: data.paginator.count,
    pageSize: data.paginator.perPage,

    onChange: onCurrentPageChanged
  }

  return (
    <Table
      columns={columns}
      pagination={pagination}
      dataSource={data.objectList}
    />
  )
}

TheTable.fragments = {
  products: gql`
    fragment Products on ProductsPage {
      objectList {
        id
        name
        category
      }
      pageNumber
      paginator {
        perPage
        numPages
        count
      }
    }
  `
}

export default TheTable

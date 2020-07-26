import { PageHeader } from 'antd'
import * as React from 'react'
import { gql } from '@apollo/client'
import { Me } from './generated/Me'

type TheHeaderProps = {
  me: Me | undefined | null
}

function TheHeader ({ me }: TheHeaderProps) {
  function formatMe (me: Me) {
    return `${me.firstName} ${me.lastName} (${me.id})`
  }

  if (me === undefined || me === null) {
    return (
      <PageHeader title="" />
    )
  }

  return (
    <PageHeader title={formatMe(me)} />
  )
}

TheHeader.fragments = {
  me: gql`fragment Me on User {
    id
    username
    firstName
    lastName
  }`
}

export default TheHeader

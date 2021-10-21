import React, { useEffect, useState } from 'react'
import { Admin, Resource } from 'react-admin'
import { useApolloClient } from '@apollo/react-hooks'
import pgDataProvider from 'ra-postgraphile'
import { PeopleList } from './People'

const App = () => {
  const [dataProvider, setDataProvider] = useState(null)
  const client = useApolloClient()

  useEffect(() => {
    (async () => {
      const dataProvider = await pgDataProvider(client)
      setDataProvider(() => dataProvider)
    })()
  }, [])

  return (
    dataProvider && (
      <Admin dataProvider={dataProvider}>
        <Resource name="Person" list={PeopleList} />
      </Admin>
    )
  )
}

export default App
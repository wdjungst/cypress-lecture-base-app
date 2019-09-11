import React, { useEffect } from 'react';
import { Header } from 'semantic-ui-react';
import { connect } from 'react-redux'
import styled from 'styled-components'
import { getEntries } from '../reducers/entries'
import EntryForm from './EntryForm'
import Activity from './Activity'
import Ledger from './Ledger'
import FilterBar from './FilterBar'

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

const Container = styled.div`
  padding: 20px;
`

const Home = ({ dispatch }) => {
  useEffect( () => {
    dispatch(getEntries())
  }, [dispatch])

  return (
    <Container>
      <Header as="h1" textAlign="center">Budget Home</Header>
      <TopWrapper>
        <EntryForm />
        <Activity />
      </TopWrapper>
      <h3>Ledger</h3>
      <FilterBar />
      <Ledger />
    </Container>
  )
}

export default connect()(Home)


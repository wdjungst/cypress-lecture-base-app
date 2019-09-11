import React from 'react'
import { connect } from 'react-redux'
import { Select } from 'semantic-ui-react'
import { setFilter } from '../reducers/filter'

const options = [
  { key: 'all', value: 'all', text: 'All' },
  { key: 'debit', value: 'debit', text: 'Debits' },
  { key: 'credit', value: 'credit', text: 'Credits' },
]

const FilterBar = ({ dispatch }) => {
  const handleChange = (e, extra) => {
    dispatch(setFilter(extra.value))
  }

  return (
    <Select options={options} onChange={handleChange} defaultValue="all" />
  )
}

export default connect()(FilterBar)

import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Select, Input, Button, Header } from 'semantic-ui-react'
import { addEntry } from '../reducers/entries'
import styled from 'styled-components'

const Form = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  padding: 20px;
  border: solid 1px black;
  justify-content: space-between;
  border-radius: 5px;
`

const options = [
  { key: 'debit', value: 'debit', text: 'Debit' },
  { key: 'credit', value: 'credit', text: 'Credit' },
]

const EntryForm = ({ dispatch }) => {
  const initialValues = {
    entry_type: 'debit',
    description: '',
    amt: '',
  }

  const [entry, setEntry] = useState(initialValues)

  const handleChange = (e, extra) => {
    const { name, value } = e.target
    if (name) {
      setEntry({
        ...entry,
        [name]: value,
      })
    } else {
      setEntry({
        ...entry,
        [extra.name]: extra.value,
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addEntry(entry))
    setEntry(initialValues)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Form>
        <Header as="h3">Add An Entry</Header>
        <Select name="entry_type" options={options} value={entry.entry_type} onChange={handleChange}/>
        <Input
          name="amt"
          placeholder="Amount"
          value={entry.amt}
          onChange={handleChange}
          required
          type="number"
          step="0.01"
        />
        <Input
          placeholder="Description"
          name="description"
          value={entry.description}
          onChange={handleChange}
          required
        />
        <Button primary>Add {entry.entry_type === 'debit' ? 'Debit' : 'Credit'}</Button>
      </Form>
    </form>
  )
}

export default connect()(EntryForm)

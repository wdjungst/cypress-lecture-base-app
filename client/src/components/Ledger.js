import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Table } from 'semantic-ui-react'

const Debit = styled(Table.Cell)`
  color: #FF0000;
`

const Credit = styled(Table.Cell)`
  color: #000;
`

const Ledger = ({ entries }) => {
  return (
    <Table striped textAlign="center">
      <Table.Header>
        <Table.Row>
          { ['Date', 'Description', 'Amt'].map( h => {
              return (
                <Table.HeaderCell key={h}>{h}</Table.HeaderCell>
              )
            })
          }
        </Table.Row>
      </Table.Header>
      <Table.Body>
        { entries.map( entry => {
           const date = new Date(entry.created_at)
           const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
            const Cell = entry.entry_type === 'debit' ? Debit : Credit
            return (
              <Table.Row key={entry.id}>
                <Table.Cell>
                  {formattedDate}
                </Table.Cell>
                <Table.Cell>
                  { entry.description }
                </Table.Cell>
                <Cell>
                  ${entry.amt.toFixed(2)}
                </Cell>
              </Table.Row>
            )
          })
        }
      </Table.Body>
    </Table>
  )
}

const mapStateToProps = state => {
  let entries = state.entries
  if (state.filter !== 'all')
    entries = entries.filter( e => e.entry_type === state.filter )
  return { entries }
}

export default connect(mapStateToProps)(Ledger)

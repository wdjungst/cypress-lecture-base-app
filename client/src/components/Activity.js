import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const Header = styled.span`
  font-size: 2.5rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-right: solid 1px lightgray;
  text-align: center;
  font-weight: bold;
  .extra { 
    margin-top: 20px;
    font-weight: 100;
  }
`

const Pos = styled(Header)`
  .extra {
    color: #228B22;
  }
`

const Neg = styled(Header)`
  .extra {
    color: #FF0000;
  }
`

const getState = (value) => {
  if (value > 0)
    return Pos
  else if (value < 0)
    return Neg
  else
    return Header
}

const Container = styled.div`
  display: flex;
  border: solid 1px black;
  justify-content: space-around;
  flex: 2
  align-items: center;
  border-radius: 5px;
  margin-left: 10px;
`

const calc = (values) => {
  return values.reduce( (entry, total) => total + entry, 0)
}

const Activity = ({ entries }) => {
  const [debits, setDebits] = useState(0)
  const [credits, setCredits] = useState(0)

  useEffect( () => {
    setDebits(calc(entries.filter( e => e.entry_type === 'debit' ).map( d => d.amt )))
    setCredits(calc(entries.filter( e => e.entry_type === 'credit' ).map( d => d.amt )))
  }, [entries])

  const Total = getState(credits - debits)

  return (
    <Container>
      <Header>Debits: <br /><span className="extra">${debits.toFixed(2)}</span></Header>
      <Header>Credits: <br /><span className="extra">${credits.toFixed(2)}</span></Header>
      <Total>Total: <br /><span className="extra">${(credits - debits).toFixed(2)}</span></Total>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return { entries: state.entries }
}

export default connect(mapStateToProps)(Activity)

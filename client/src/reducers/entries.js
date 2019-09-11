import axios from 'axios'
const ADD_ENTRY = 'ADD_ENTRY'
const GET_ENTRIES = 'GET_ENTRIES'

export const addEntry = (entry) => {
  return (dispatch) => {
    axios.post('/api/entries', { entry })
      .then( res => dispatch({ type: ADD_ENTRY, entry: res.data }) )
  }
}

export const getEntries = () => {
  return (dispatch) => {
    axios.get('/api/entries')
      .then( res => dispatch({ type: GET_ENTRIES, entries: res.data }) )
  }
}

export default (state = [], action) => {
  switch(action.type) {
    case GET_ENTRIES:
      return action.entries
    case ADD_ENTRY:
      return [action.entry, ...state]
    default:
      return state
  }
}

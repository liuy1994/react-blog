const defaultState = {
  selectedNoteId: null
}
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SELECT_NOTE': 
      return Object.assign({}, state, {
        selectedNoteId: action.id
      })
    default:
      return state
  }
}
export default reducer
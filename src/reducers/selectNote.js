const selectNote = (state = [], action) => {
  return [...state, { noteId: action.noteId }]
}
export default selectNote
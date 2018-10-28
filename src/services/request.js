import axios from '../utils/axios'
export default {
  getNoteList() {
    return axios.post('note/list')
  },
  addNoteItem(name) {
    return axios.post('note/add', { name })
  },
  deleteNoteItem(id) {
    return axios.post('note/delete', { id })
  },
  getNoteDetail() {
    return axios.post('note/detail')
  },
  getContentList() {
    return axios.post('content/list')
  },
  getContentDetail(id) {
    return axios.post('content/detail', { id })
  },
  addContentItem({name, content, biref, note_id, publish}){
    return axios.post('content/detail', {name, content, biref, note_id, publish})
  }
}
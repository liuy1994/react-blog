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
  getItemList() {
    return axios.post('item/list')
  },
  getItemDetail() {
    return axios.post('item/detail')
  }
}
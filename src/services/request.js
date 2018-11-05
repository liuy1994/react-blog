import axios from '../utils/axios'
import md5 from 'md5'
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

  getContentList(noteId) {
    return axios.post('content/list', { noteId})
  },
  getContentDetail(id) {
    return axios.post('content/detail', { id })
  },
  addContentItem({ name, content, brief, publish}){
    return axios.post('content/add', { name, content, brief, publish, noteId: 14})
  },

  checkName(userName) {
    return axios.post('user/checkExit', { userName })
  },
  signup({ userName, password }){
    password = md5(password)
    return axios.post('user/signup', { userName, password })
  },
  login({ userName, password }) {
    password = md5(password)
    return axios.post('user/login', { userName, password })
  },
  logout() {
    return axios.post('user/logout')
  }
}
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

  getContentList() {
    return axios.post('content/list')
  },
  getContentDetail(id) {
    return axios.post('content/detail', { id })
  },
  addContentItem({name, content, brief, publish}){
    return axios.post('content/add', {name, content, brief, publish})
  },

  checkName(name) {
    return axios.post('user/checkExit', { name })
  },
  signup({ name, password }){
    password = md5(password)
    return axios.post('user/signup', { name, password })
  },
  login({ name, password }) {
    password = md5(password)
    return axios.post('user/login', { name, password })
  }
}
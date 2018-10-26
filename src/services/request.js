import axios from '../utils/axios'
export default {
  getNoteList() {
    return axios.post('note/list')
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
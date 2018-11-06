import md5 from 'md5'
import axios from '../utils/axios'
export default (file) => {
  return axios.post('file/getPolicy').then(data => {
    data.OSSAccessKeyId = data.accessid
    delete data.accessid
    const formData = new FormData()
    for (const key in data) {
      if (key !== 'host') {
        formData.append(key, data[key])
      }
    }
    const fileName = `${md5(Math.random())}.${file.name.replace(/.+\./, '')}`
    formData.append('name', fileName)
    formData.append('key', data.dir + '/' + fileName)
    formData.append('file', file)
    formData.append('success_action_status', 200)
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.onerror = function error(e) {
        console.log(e)
        reject(e)
      }
      xhr.onload = function onload() {
        if (xhr.status < 200 || xhr.status >= 300) {
          reject(xhr.status)
        }
        console.log(`${data.host}/blog/${fileName}`)
        resolve(`${data.host}/blog/${fileName}`)
      }
      xhr.open('post', data.host, true)
      // xhr.withCredentials = true
      xhr.send(formData)
    })
  })
}
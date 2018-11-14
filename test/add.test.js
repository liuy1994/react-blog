let add = require('./add.js')
let expect = require('chai').expect

describe('测试', () => {
  it('测试在5s后结束', (done) => {
    let x = true
    let f = () => {
      x = false
      expect(x).to.be.not.ok
      done()
    }
    setTimeout(f, 1000);
  })
})
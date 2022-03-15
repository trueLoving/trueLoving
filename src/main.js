const path = require('path')
const fs = require('fs-extra')
const dayjs = require('dayjs')

const testMdPath = path.join(process.cwd(), 'src', 'test.md')

fs.writeFile(testMdPath, `${dayjs().format()}`).then(res => {
  console.log('write successfully!!!')
}).catch(err => {
  console.log('write error!!!!')
  console.log(err)
})

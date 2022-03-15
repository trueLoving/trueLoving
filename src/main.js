const path = require('path')
const fs = require('fs-extra')

const data = fs.readFileSync(path.join(process.cwd(), 'src', 'test.md')).toString('utf-8')

console.log('data', data)

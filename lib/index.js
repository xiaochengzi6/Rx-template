const themplate = require('./readFile')
const {treeTopath}  = require('rx-file');
const path = require('path')
const os = require('os')
const tree = themplate.string
const tmpdir = os.tmpdir()
const uniqueFilename = require('unique-filename')
console.log(tree)

let filearrs = treeTopath(tree)
console.log(filearrs)

// 找到当前零时文件夹创建唯一的文件
const hashFilename = uniqueFilename('themplate-')
console.log(hashFilename)


// const tempProjectPath = fs.mkdtempSync(
//   path.join(os.tmpdir(), hashFilename)
// );

// 文件存储在临时文件 且文件名是 `${templateName}.zip`
// const file = path.join(tempProjectPath, `${templateName}.zip`);
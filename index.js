const { zip } = require("compressing");
const path = require("path");
const fs = require("fs");
const dirname = path.join(__dirname);
const rxFile = require("rx-file");
let pathArr = rxFile.treePath("./lib/themplate.txt");
let filepath = rxFile.create("themplate", pathArr);

// 配置 zip 文件名

let version = 0;
if (typeof process.argv.slice(2)[0] == 'number') {
  console.log('逻辑', process.argv)
  version = process.argv.slice(2)[0];
}
++version;

let zipPath = `rx-template_${version}.zip`;

// 清空 zip 文件
const zipDirs = fs.readdirSync(dirname);

const arrs = [
  "rx-template_1.zip",
  "rx-template_2.zip",
  "rx-template_3.zip",
  "rx-template_4.zip",
];

let count = true;
if (zipDirs && zipDirs.length > 0) {
  for (let index = 0; index < zipDirs.length; index++) {
    const dir = zipDirs[index];
    if (zipPath == dir) {
      zipPath = `rx-template_${++version}.zip`;
      if (version > 4) {
        // 删除逻辑
        // 始终保持四个 多了就不能创建 
        // const dirPath = path.resolve(__dirname, zipPath);
        count = false;
        continue
      }
    }
  }
}

if(count){
  zip.compressDir(filepath, zipPath).then(compressDone).catch(handleError);
}

function compressDone() {
  console.log("zip 包路径 == ",path.join(filepath, zipPath));
}

function handleError(err) {
  console.log("压缩失败");
}

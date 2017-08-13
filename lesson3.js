/**
 * Created by yonglong on 2017/8/13.
 */
var fs = require('fs');
//process.argv[2] 引用输入的文件路径，utf-8格式转换
var buf = fs.readFileSync(process.argv[2],'utf-8');
var str = buf.toString();//转换成字符串
// console.log(str);
var arr = str.split('\n');//使用.split计算字符串长度
// console.log(arr);
console.log(arr.length);
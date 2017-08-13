/**
 * Created by yonglong on 2017/8/13.
 */
var fs = require('fs');
var buf = fs.readFile(process.argv[2],'utf-8',function callback(err,data){
    var str = data.toString().split('\n');
    console.log(str.length);
});

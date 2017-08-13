/**
 * Created by yonglong on 2017/8/13.
 */
var fs=require('fs');
var path = require("path");
var str=process.argv[3];
var num = fs.readdir(process.argv[2],function callback(err,list){
    // console.log(list.length);
    for(var i=0;i<list.length;i++){
        var b=path.extname(list[i]);
        // console.log(b)
        if(b==str){
            console.log(list[i]);
        }
    }
});
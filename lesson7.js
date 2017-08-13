/**
 * Created by yonglong on 2017/8/13.
 */
var http = require('http');
http.get(process.argv[2],function callback(response) {
    response.setEncoding('utf-8');
    response.on('data',function(data){
        console.log(data);
    });
    response.on('err', function (err) {
        throw err;
    });
    response.on('end', function (end) {
        console.log(end);
    });
});
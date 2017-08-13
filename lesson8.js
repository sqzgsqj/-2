/**
 * Created by yonglong on 2017/8/13.
 */
var http = require('http');
var bl = require('bl');
http.get(process.argv[2], function (response) {
    response.setEncoding('utf8');
    response.pipe(bl(function (err, data) {
        console.log(data.toString().length);
        console.log(data.toString());
    }));
    response.on('error', function (err) {
        throw err;//抛出
    });
});
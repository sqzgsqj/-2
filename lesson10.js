/**
 * Created by yonglong on 2017/8/13.
 */
var net = require('net');
var pro = process.argv[2];
var getTime = function () {
    var date = new Date();
    year = date.getFullYear();
    month = formate(date.getMonth() + 1);
    day = formate(date.getDate());
    hour = formate(date.getHours());
    minute = formate(date.getMinutes());
    var time = year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
    function formate(time) {
        return (time.toString().length > 1 ? '' : '0' ) + time;
    }
    console.log(time);
    return time;
};
var server = net.createServer(function(socket){
    socket.end(getTime() + '\n');
}).listen(pro);
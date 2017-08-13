/**
 * Created by yonglong on 2017/8/13.
 */
var a=0;
var b=process.argv;
for (var i=2;i < b.length;i++){
    a+=+b[i];
}
console.log(a);

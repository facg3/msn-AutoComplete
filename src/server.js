const http=require('http');
const router=require('./router');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 5050;
const server = http.createServer(router);
server.listen(port,function(result){
console.log('server running on: http://' + host + ':' + port);
});

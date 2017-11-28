const handlers=require('./handler.js');
const router=(request,response)=>{
  const endpoint=request.url;
if(endpoint.startsWith('/public')){
  handlers.generic(request,response);
}
else{
  response.writeHead(404);
  response.end('Page Not Found');
}
};
module.exports=router;

const handlers=require('./handler.js');
const router=(request,response)=>{
  const endpoint=request.url;
  if(endpoint === '/'){
    handlers.handleHomePages(request,response)
  }
else if(endpoint.startsWith('/public')){
  handlers.generic(request,response);
}
else if(endpoint=== '/countries.json'){
  handlers.handleResult(request,response);
}
else{
  response.writeHead(404);
  response.end('Page Not Found');
}
};
module.exports=router;

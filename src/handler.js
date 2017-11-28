const fs =require('fs');
const path =require('path');
const querystring = require('querystring');
const checkAndFillter = require('./logic');

const handleHomePages = (request, response) => {
  fs.readFile(path.join(__dirname, '..', 'public' , 'index.html'), (error,file) =>{
    if(error){
      response.writeHead(500,'content-Type:text/html');
      response.end('<h1> Internal server Error </h1>');
    }
    else{
      response.writeHead(200,{'content-Type': 'text/html'});
      response.end(file);
    }
  })
}
const generic =(request,response)=>{
  const endpoint=request.url;
  const extension=endpoint.split('.')[1];
  const fileType={
    html:'text/html',
    css:'text/css',
    js:'application/javascript',
    ico:'image/x-icon',
    json:'application/json'
  };
    fs.readFile(path.join(__dirname,'..',endpoint),(error,file)=>{

      if(error){
        response.writeHead(500,'content-Type:text/html');
        response.end('<h1> Internal server Error </h1>');
      }
      else{

        response.writeHead(200,'content-Type:'+fileType[extension]);
        response.end(file);
      }
});
};

const handleResult = (request, response) => {
  fs.readFile(path.join(__dirname + '/countries.json'), (error,result) =>
  {
    if(error){
      response.writeHead(500,'content-Type:text/html');
      response.end('<h1> Internal server Error </h1>');
    }
    else {
      const resultToObject = JSON.parse(result);
      console.log('asdasdasdasdasd');
      console.log(resultToObject);
      const allValues = "";
      request.on('data', chunckOfData =>{
        allValues += chunckOfData;
      });
      const convertedValues = querystring.parse(allValues);
      console.log('all values');
      console.log(convertedValues);
      checkAndFillter(resultToObject,allValues);
    }
  });
}

module.exports={
  generic,
  handleHomePages,
  handleResult
};

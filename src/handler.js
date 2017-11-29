const fs = require('fs');
const path = require('path');
const querystring = require('querystring');
const logic = require('./logic');

const handleHomePages = (request, response) => {
  fs.readFile(path.join(__dirname, '..', 'public', 'index.html'), (error, file) => {
    if (error) {
      response.writeHead(500, 'content-Type:text/html');
      response.end('<h1> Internal server Error </h1>');
    } else {
      response.writeHead(200, {
        'content-Type': 'text/html'
      });
      response.end(file);
    }
  })
}
const generic = (request, response) => {
  const endpoint = request.url;
  const extension = endpoint.split('.')[1];
  const fileType = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    ico: 'image/x-icon',
    json: 'application/json'
  };
  fs.readFile(path.join(__dirname, '..', endpoint), (error, file) => {

    if (error) {
      response.writeHead(500, 'content-Type:text/html');
      response.end('<h1> Internal server Error </h1>');
    } else {

      response.writeHead(200, 'content-Type:' + fileType[extension]);
      response.end(file);
    }
  });
};
const handleResult = (request, response) => {
  fs.readFile(path.join(__dirname + '/countries1.json'), (error, result) => {
    if (error) {
      response.writeHead(500, 'Content-Type : text/html');
      response.end('<h1> Internal server Error </h1>');
    } else {
      const resultToObject = JSON.parse(result);

      let allValues = "";
      request.on('data', chunckOfData => {
        allValues += chunckOfData;
      });
      request.on('end', () => {
        const filteredResult = logic.checkAndFillter(allValues, resultToObject);
        response.end(JSON.stringify(filteredResult));
      })
    }
  });
}

const handleLines = (request, response) => {
  fs.readFile(path.join(__dirname + '/countries1.json'), (error, result) => {
    if (error) {
      response.writeHead(500, 'Content-Type : text/html');
      response.end('<h1> Internal server Error </h1>');
    } else {
      const resultObj = JSON.parse(result);
      var nameofcountry = "";
      request.on('data', chunk => {
        nameofcountry += chunk;
      });
      request.on('end', () => {
        const lines = logic.longAndatt(nameofcountry, resultObj);
        response.end(JSON.stringify(lines));
      })
    }
  });
}


module.exports = {
  generic,
  handleHomePages,
  handleResult,
  handleLines
};

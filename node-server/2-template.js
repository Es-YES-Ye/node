const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
// const http2 = require('http2'); // https

const name = 'SUN';

const courses = [
  {name: 'HTML'},{name: 'CSS'},{name:'JS'},{name:'Node'},
];

const server = http.createServer((req, res) => {
  console.log('incoming...');
  console.log(req.headers);
  console.log(req.httpVersion);
  console.log(req.method);
  console.log(req.url);
  //res.write('WElCOME!');
  //res.end();
  
  const url = req.url;
  res.setHeader('Content-Type', 'text/html');
  if (url === '/') {
    ejs
      .renderFile('./template/index.ejs', {name})
      .then(data => res.end(data));
  } else if (url === '/courses') {
    ejs
      .renderFile('./template/courses.ejs', {courses})
      .then(data => res.end(data));
  } else {
    ejs
      .renderFile('./template/not-found.ejs', {name})
      .then(data => res.end(data));  } 
});

server.listen(9999); 
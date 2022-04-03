const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
const { json } = require('stream/consumers');
// const http2 = require('http2'); // https

const name = 'SUN';
const courses = [
  {name: 'HTML'},{name: 'CSS'},{name:'JS'},{name:'Node'},
];

const server = http.createServer((req, res) => {
  const method = req.method; //how, action
  const url = req.url; //what
  if(url === '/courses'){
    if(method === 'GET'){
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(courses));
    } else if (method === 'POST'){
      const body = []; //buffer 방식
      req.on('data', chunk => {
        console.log(chunk);
        body.push(chuck);
      });

      req.on('end', ()=>{
        const bodyStr = Buffer.concat(body).toString();
        const course = JSON.parse(bodyStr);
        courses.push(course);
        console.log(course);
        res.writeHead(201);
        res.end();
      });
    }
  }
});
server.listen(9999); 
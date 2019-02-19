const fs = require('fs');
const http = require('http');
const port = 3000;

const requestHandler = (request, response) => {

  fs.writeFile('hello-world.txt', 'Hello to this great world', (err) => {
    if (err) {
      return console.error(err);
    }
    return console.log(`File is created`);
  });
  response.end(`Handling a request on port ${port}`)
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log(`You have an error: ${err}`);
  }
  return console.log(`Server is listening on port: ${port}`);
});

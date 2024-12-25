const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might throw an error
  doSomethingAsync().then(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  }).catch(error => {
    //This error is not handled properly and the server will crash
    console.error('Error:', error);
  });
});

async function doSomethingAsync() {
  // Simulate an asynchronous operation that might throw an error
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate an error
      reject(new Error('Something went wrong!'));
    }, 100);
  });
}

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
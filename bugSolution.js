const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might throw an error
  doSomethingAsync().then(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  }).catch(error => {
    console.error('Error:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  });
});

async function doSomethingAsync() {
  // Simulate an asynchronous operation that might throw an error
  try {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate an error
        reject(new Error('Something went wrong!'));
      }, 100);
    });
  } catch (error) {
    //This is a better solution to handle the error
    throw error; 
  }
}

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
const HTTP = require('http');

const app = HTTP.createServer();
const PORT = 1245;
const HOST = 'localhost';

app.on('request', (_, res) => {
  const plainText = "Hello Holberton School!";

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', plainText.length);
  res.statusCode = 200;
  res.write(Buffer.from(plainText));
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;

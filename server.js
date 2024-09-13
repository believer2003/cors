const cors_proxy = require('cors-anywhere');

const host = 'localhost';
const port = 3002;

cors_proxy.createServer({
  originWhitelist: [], // Allow all origins
  requireHeader: [],   // Do not require any headers
  removeHeaders: ['cookie', 'cookie2'] // Optional: Remove cookies for security
}).listen(port, host, () => {
  console.log(`Running CORS Anywhere on ${host}:${port}`);
});

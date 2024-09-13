const cors_proxy = require('cors-anywhere');

const host = '0.0.0.0';
const port = 3002;

cors_proxy.createServer({
  originWhitelist: [],
  requireHeader: [],
}).listen(port, host, () => {
  console.log(`Running CORS Anywhere on ${host}:${port}`);
});

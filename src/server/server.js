require('env2')('.../.env');

const http = require('http');
const router = require('./router.js');
const PORT = process.env.PORT || 5001;
const server = http.createServer(router);

server.listen(PORT, () => {
  console.log('server is up and running on port 5001!');
});

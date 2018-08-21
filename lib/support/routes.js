const { serverStatus } = require('./controllers');

const routes = (router) => {
  router.get('/status', serverStatus);
};

module.exports = routes;

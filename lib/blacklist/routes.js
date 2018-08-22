const { getStatusByCPF, insertCPFInBlacklist } = require('./controllers');

const routes = (router) => {
  router.get('/cpf/:cpf/status', getStatusByCPF);
  router.post('/cpf/blacklist', insertCPFInBlacklist);
};

module.exports = routes;

const { getStatusByCPF, insertCPFInBlacklist, removeCPFFromBlacklist } = require('./controllers');

const routes = (router) => {
  router.get('/cpf/:cpf/status', getStatusByCPF);
  router.post('/cpf/blacklist', insertCPFInBlacklist);
  router.delete('/cpf/:cpf', removeCPFFromBlacklist);
};

module.exports = routes;

const getStatusByCPF = require('./get-status-by-cpf');
const insertCPFInBlacklist = require('./insert-cpf-in-blacklist');
const removeCPFFromBlacklist = require('./remove-cpf-from-blacklist');

module.exports = {
  getStatusByCPF,
  insertCPFInBlacklist,
  removeCPFFromBlacklist
};

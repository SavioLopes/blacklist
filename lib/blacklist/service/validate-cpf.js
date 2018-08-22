const cpfCheck = require('cpf-check');

module.exports = (cpf) => {
  const resultCPF = cpfCheck.strip(cpf);
  const result = cpfCheck.validate(resultCPF);
  if (result.valid) {
    return resultCPF;
  }
  return false;
};

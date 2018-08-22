const logger = require('../../commons/logger');
const { findOne } = require('../repository');
const { validateCPF } = require('../service');

module.exports = async (req, res) => {
  try {
    const { cpf } = req.params;
    const resultValidate = validateCPF(cpf);
    if (!resultValidate) {
      return res.sendStatus(400);
    }
    const result = await findOne({ cpf: resultValidate });
    if (!result) {
      return res.sendStatus(204);
    }
    delete result._id;
    return res.status(200).send(result);
  } catch (err) {
    logger.error('Error at get CPF status. Err:', err);
    return res.sendStatus(500);
  }
};

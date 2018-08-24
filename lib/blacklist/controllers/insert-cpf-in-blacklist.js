const logger = require('../../commons/logger');
const { insertOne } = require('../repository');
const { validateCPF } = require('../service');

module.exports = async (req, res) => {
  try {
    const { body } = req;
    const resultValidate = validateCPF(body.cpf);
    if (!resultValidate) {
      return res.sendStatus(400);
    }
    const objBlacklist = {
      cpf: resultValidate,
      includedAt: new Date()
    };
    await insertOne(objBlacklist);
    return res.sendStatus(201);
  } catch (err) {
    logger.error('Error insert cpf in blacklist. Err: ' + err);
    if (typeof err === 'object' && err.code === 11000) {
      return res.sendStatus(409);
    }
    return res.sendStatus(500);
  }
};

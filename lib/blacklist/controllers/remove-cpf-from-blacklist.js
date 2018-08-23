const { validateCPF } = require('../service');
const { deleteOne } = require('../repository');

module.exports = async (req, res) => {
  try {
    const { cpf } = req.params;
    const resultValidate = validateCPF(cpf);
    if (!resultValidate) {
      return res.sendStatus(400);
    }
    const resultDelete = await deleteOne({ cpf });
    if (resultDelete.deletedCount) {
      return res.sendStatus(200);
    }
    return res.sendStatus(204);
  } catch (err) {
    logger.error('Error at remove CPF from blacklist. Err:' + err);
    return res.sendStatus(500);
  }
};
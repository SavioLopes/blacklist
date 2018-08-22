const { getCollection } = require('../../commons/database');

const repository = (() => {
  const findOne = obj =>  getCollection('blacklist').findOne(obj);
  const insertOne = obj =>  getCollection('blacklist').insertOne(obj);
  const deleteOne = filter => getCollection('blacklist').deleteOne(filter);

  return {
    findOne,
    insertOne,
    deleteOne
  };
})();

module.exports = repository;

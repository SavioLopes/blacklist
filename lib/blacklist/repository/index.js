const { getCollection } = require('../../commons/database');

const repository = (() => {
  const findOne = filter =>  getCollection('blacklist').findOne(filter);
  const insertOne = obj =>  getCollection('blacklist').insertOne(obj);
  const deleteOne = filter => getCollection('blacklist').deleteOne(filter);
  const count = () => getCollection('blacklist').count();

  return {
    findOne,
    insertOne,
    deleteOne,
    count,
  };
})();

module.exports = repository;

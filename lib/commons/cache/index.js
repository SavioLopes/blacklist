const NodeCache = require('node-cache');

const cache = (() => {
  let myCache;
  const getInstance = () => {
    if (!myCache) {
      myCache = new NodeCache();
    }
    return myCache;
  };
  return {
    getInstance
  }
})();

module.exports = cache;

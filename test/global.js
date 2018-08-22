const config = require('../lib/commons/config');

before(async () => {
  config.set('MONGO_CONNECTION', `${config.get('MONGO_CONNECTION')}_test`);
});

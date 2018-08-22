const cache = require('../../commons/cache');

module.exports = (req, res) => {
  const uptime = process.uptime();
  const result = {
    serverStatus: {
      startAt: cache.getInstance().get('uptime'),
      secondsRunning: uptime
    }
  };
  return res.send(result);
};

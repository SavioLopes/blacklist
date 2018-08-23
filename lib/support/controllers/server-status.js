const cache = require('../../commons/cache');
const logger = require('../../commons/logger');
const blacklistRepository = require('../../blacklist/repository');

module.exports = async (req, res) => {
  try {

    const uptime = process.uptime();
    const totalCPFInBlacklist = await blacklistRepository.count();
    const serverStartAt = cache.getInstance().get('uptime');
    const totalGetStatusAfterRestart = cache.getInstance().get('totalGetStatus');
    const result = {
      serverStartAt,
      secondsRunning: uptime,
      totalCPFInBlacklist,
      totalGetStatusAfterRestart
    };
    return res.send(result);
  } catch (err) {
    logger.error('Error at get server status. Err:' + err);
    return res.sendStatus(500);
  }
};

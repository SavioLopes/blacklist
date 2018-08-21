module.exports = (req, res) => {
    res.send({ uptime: process.uptime() });
};

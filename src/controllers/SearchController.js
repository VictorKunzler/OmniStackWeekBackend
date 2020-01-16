const searchDevsAround = require('../services/Search/searchDevsAround');

const index = async (req, res) => {
  const devs = await searchDevsAround(req.query);
  res.json(devs);
};

module.exports = {
  index
};

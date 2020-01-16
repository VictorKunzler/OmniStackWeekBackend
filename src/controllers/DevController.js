const getAll = require('../services/Dev/getAll');
const create = require('../services/Dev/create');

const index = async (req, res) => {
  const devs = await getAll();
  return res.json(devs);
};

const store = async (req, res) => {
  const dev = await create(req.body);
  return res.json(dev);
};

module.exports = {
  index,
  store,
};

const Dev = require('../../models/Dev');

const getAll = async () => {
  const devs = await Dev.find();
  return devs;
};

module.exports = getAll;

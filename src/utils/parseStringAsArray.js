module.exports = function parseStringAsArray (stringValue) {
  return stringValue.split(',').map(value => value.trim());
};

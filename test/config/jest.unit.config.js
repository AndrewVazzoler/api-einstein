const configDefault = require('./jest.config');

module.exports = {
  ...configDefault,
  testRegex: '.unit.spec.ts$',
};

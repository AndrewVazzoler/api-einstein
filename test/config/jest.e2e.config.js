const configDefault = require('./jest.config');

module.exports = {
  ...configDefault,
  testRegex: '.e2e-spec.ts$',
};

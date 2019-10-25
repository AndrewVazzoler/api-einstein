module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js'],
  coveragePathIgnorePatterns: [],
  coverageReporters: ['html', 'lcov', 'text-summary'],
  rootDir: '../../',
  setupFilesAfterEnv: ['<rootDir>/test/config/setup.ts'],
  testEnvironment: 'node',
  testRegex: '.spec.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
};

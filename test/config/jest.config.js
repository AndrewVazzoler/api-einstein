module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,js}'],
  coveragePathIgnorePatterns: [],
  rootDir: '../../',
  setupFilesAfterEnv: ['<rootDir>/test/config/setup.ts'],
  testEnvironment: 'node',
  testRegex: '.spec.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
};

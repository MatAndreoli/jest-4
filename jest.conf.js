const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, './'),
  verbose: true,
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>$1',
  },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/'
  ],
  collectCoverage: true,
  coverageDirectory:'./coverage',
  coverageReporters: ['text', 'clover', 'lcov'],
  collectCoverageFrom: [
    '**/src/**/*.js',
    '!**/tests/**/*.js',
  ],
  moduleFileExtensions: [
    'js',
  ],
};
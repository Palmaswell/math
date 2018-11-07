module.exports = {
  moduleFileExtensions: [ 'ts', 'js' ],
  moduleDirectories: [ 'node_modules', 'src' ],
  preset: 'ts-jest',
  roots: [
    '<rootDir>/src'
  ],
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
};
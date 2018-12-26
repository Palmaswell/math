module.exports = {
  moduleFileExtensions: [ 'ts', 'js' ],
  moduleDirectories: [ 'node_modules', 'src/typescript' ],
  preset: 'ts-jest',
  roots: [
    '<rootDir>'
  ],
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
};
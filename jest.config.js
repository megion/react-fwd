module.exports = {
  rootDir: 'src',
  //preset: "ts-jest",
  testEnvironment: 'node',
  moduleNameMapper: {
    watchPathIgnorePatterns: ['<rootDir>/node_modules/'],
  },
  //globals: {
  //"ts-jest": {
  //diagnostics: false,
  //},
  //},
}

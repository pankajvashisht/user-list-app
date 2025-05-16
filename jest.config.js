const {defaults: tsjPreset} = require('ts-jest/presets');

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  ...tsjPreset,
  preset: 'react-native',
  setupFiles: ['./tests/setup.ts'],
  setupFilesAfterEnv: ['./jest-setup.ts'],
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.json',
        diagnostics: false,
      },
    ],
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-navigation|@react-native|react-clone-referenced-element|@react-native-community|@react-native-picker)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleDirectories: ['node_modules', 'src'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    '!**/*.stories.{js,jsx,ts,tsx}',
    '!src/navigation/**.{js,jsx,ts,tsx}',
  ],
};

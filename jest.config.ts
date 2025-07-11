import type { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  automock: false,
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  errorOnDeprecated: true,
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  notify: true,
  resetMocks: true,
  resetModules: true,
  restoreMocks: true,
  testEnvironment: "jsdom",
};

export default createJestConfig(config);
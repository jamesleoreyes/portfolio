import type { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  // Test Environment
  testEnvironment: 'jsdom',

  // Module Configuration
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],

  // Coverage Configuration
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
    '!src/**/index.ts',

    // Skip configuration and static data files
    '!src/app/manifest.ts',
    '!src/app/**/metadata.ts',
    '!src/app/**/data.ts',
    '!src/app/seo/*.ts',
    '!src/app/seo/*.tsx',

    // Skip page components
    '!src/app/**/*.tsx',

    // Skip static components
    '!src/components/Footer.tsx',
    '!src/components/PlaceholderScreenshot.tsx',
    '!src/components/ProfileImage.tsx',
    '!src/components/SocialLinks.tsx',

    // Skip third-party UI components
    '!src/components/ui/**/*.tsx',
    '!src/components/icons/**/*.tsx',

    // Skip type definitions
    '!src/types/**/*.ts',
    '!src/app/**/types/*.ts',

    // Skip configuration files
    '!src/configs/**/*.ts',
  ],
  coverageReporters: ['text', 'lcov', 'html'],
  // Remove coverage thresholds for now - add them back gradually
  // coverageThreshold: {
  //   global: {
  //     branches: 50,
  //     functions: 50,
  //     lines: 50,
  //     statements: 50,
  //   },
  // },

  // Mock Configuration
  automock: false,
  clearMocks: true,
  resetMocks: true,
  resetModules: true,
  restoreMocks: true,

  // Test Configuration
  testMatch: [
    '**/__tests__/**/*.(js|jsx|ts|tsx)',
    '**/*.(test|spec).(js|jsx|ts|tsx)',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/coverage/',
    '<rootDir>/out/',
  ],

  // Performance & CI Configuration
  maxWorkers: process.env['CI'] ? 2 : '50%',
  watchman: false,
  errorOnDeprecated: true,

  // CI-specific settings
  ...(process.env['CI'] && {
    ci: true,
    bail: 1, // Stop on first test failure in CI
    forceExit: true,
    detectOpenHandles: true,
  }),
};

export default createJestConfig(config);
import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  // Jest configuration options...
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  // Other Jest configuration options...
};

export default config;




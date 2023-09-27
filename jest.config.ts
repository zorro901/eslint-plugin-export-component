import type { Config } from 'jest'

const config: Config = {
  clearMocks: true,
  modulePathIgnorePatterns: ['<rootDir>/dist'],
  preset: 'ts-jest',
  restoreMocks: true,
  testEnvironment: 'node',
  silent: false,
}

export default config

import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
    rootDir: '.',
    maxWorkers: 3,
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/__mocks__/fileMock.ts',
        '\\.(html)$': '<rootDir>/__mocks__/fileMock.ts',
        '\\.(css|sass)$': '<rootDir>/__mocks__/styleMock.ts',
    },
    globals: {},
}
export default config

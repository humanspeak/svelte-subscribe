import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vitest/config'

export default defineConfig({
    plugins: [sveltekit()],
    test: {
        include: ['src/**/*.test.ts'],
        globals: true,
        coverage: {
            reporter: 'lcov',
            exclude: ['docs/**', '.trunk/**', '.svelte-kit/**', 'tests/**', 'src/routes/**']
        },
        // junit feeds the trunk analytics uploader in CI (junit-vitest.xml
        // matches the workflow's junit-paths)
        reporters: process.env.CI ? ['verbose', 'junit'] : ['verbose'],
        outputFile: { junit: 'junit-vitest.xml' }
    }
})

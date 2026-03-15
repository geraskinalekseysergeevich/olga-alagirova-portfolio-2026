import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
	// Use relative asset URLs so the bundle works both from a domain root and a subdirectory.
	base: './',
	plugins: [react()],
})

import './styles/global.css'

import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { router } from './router/router'

const applySafariGlassFallbackClass = () => {
	const userAgent = window.navigator.userAgent
	const isIOSWebKit = /iP(hone|ad|od)/i.test(userAgent) && /WebKit/i.test(userAgent)
	const isSafariDesktop = /Safari/i.test(userAgent) && !/Chrome|Chromium|Edg|OPR|CriOS|FxiOS/i.test(userAgent)

	if (isIOSWebKit || isSafariDesktop) {
		document.documentElement.classList.add('safari-glass-fallback')
	}
}

const rootElement = document.getElementById('root')

if (!rootElement) {
	throw new Error('Root element not found')
}

applySafariGlassFallbackClass()

createRoot(rootElement).render(<RouterProvider router={router} />)

import { useLayoutEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import { Navbar } from '../navbar/navbar'

export const Layout = () => {
	const { pathname, hash } = useLocation()

	useLayoutEffect(() => {
		if (hash) {
			return
		}

		window.scrollTo(0, 0)
	}, [pathname, hash])

	return (
		<>
			<Navbar />
			<Outlet />
		</>
	)
}

import { useLayoutEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import { Navbar } from '../navbar/navbar'

export const Layout = () => {
	const { pathname, hash } = useLocation()
	const previousPathnameRef = useRef(pathname)

	useLayoutEffect(() => {
		const isPathnameChanged = previousPathnameRef.current !== pathname
		previousPathnameRef.current = pathname

		if (!isPathnameChanged || hash) {
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

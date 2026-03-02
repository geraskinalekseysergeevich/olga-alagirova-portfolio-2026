import clsx from 'clsx'
import { type CSSProperties, useCallback, useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { CASES_ROUTE, CV_ROUTE, MAIN_ROUTE } from '../../router/routes'
import styles from './navbar.module.css'
import { NavbarItem } from './navbar-item/navbar-item'

type NavItem = {
	label: string
	to: string
	theme?: 'light' | 'dark'
}

type NavbarConfig = {
	anchors: NavItem[]
	pageLinks: NavItem[]
}

const NAVBAR_LAYOUT_CONFIG = {
	contentTransitionMs: 200,
} as const

const DEFAULT_NAVBAR_CONFIG: NavbarConfig = {
	anchors: [
		{ label: 'Brand Cases', to: '/#brand-cases' },
		{ label: 'Typography & Others', to: '/#typography-others' },
		{ label: 'Contacts', to: '/#contacts' },
	],
	pageLinks: [{ label: 'CV', to: CV_ROUTE, theme: 'dark' }],
}

const NAVBAR_CONFIGS: Partial<Record<string, NavbarConfig>> = {
	[MAIN_ROUTE]: DEFAULT_NAVBAR_CONFIG,
	[CV_ROUTE]: {
		anchors: [{ label: 'Contacts', to: `${CV_ROUTE}#contacts` }],
		pageLinks: [{ label: 'Main', to: MAIN_ROUTE, theme: 'dark' }],
	},
}

const getCasesNavbarConfig = (pathname: string): NavbarConfig => ({
	anchors: [{ label: 'Contacts', to: `${pathname}#contacts` }],
	pageLinks: [
		{ label: 'Main', to: MAIN_ROUTE, theme: 'dark' },
		{ label: 'CV', to: CV_ROUTE, theme: 'dark' },
	],
})

const resolveNavbarConfig = (pathname: string): NavbarConfig => {
	if (pathname.startsWith(`${CASES_ROUTE}/`)) {
		return getCasesNavbarConfig(pathname)
	}

	return NAVBAR_CONFIGS[pathname] ?? DEFAULT_NAVBAR_CONFIG
}

export const Navbar = () => {
	const { pathname, search, hash } = useLocation()
	const navigate = useNavigate()
	const navRef = useRef<HTMLElement>(null)
	const contentRef = useRef<HTMLDivElement>(null)
	const [configPathname, setConfigPathname] = useState(pathname)
	const [isVisible, setIsVisible] = useState(true)
	const [contentWidth, setContentWidth] = useState<number | null>(null)

	const handleLogoClick = useCallback(() => {
		if (hash) {
			navigate({ pathname, search }, { replace: true })
		}

		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
	}, [hash, navigate, pathname, search])

	const updateWidth = useCallback(() => {
		const navElement = navRef.current
		const contentElement = contentRef.current

		if (!navElement || !contentElement) {
			return
		}

		const computedStyles = window.getComputedStyle(navElement)
		const paddingX = parseFloat(computedStyles.paddingLeft) + parseFloat(computedStyles.paddingRight)
		const nextWidth = Math.ceil(contentElement.getBoundingClientRect().width + paddingX)

		setContentWidth((prevWidth) => (prevWidth === nextWidth ? prevWidth : nextWidth))
	}, [])

	useEffect(() => {
		if (pathname === configPathname) {
			return
		}

		const hideTimerId = window.setTimeout(() => {
			setIsVisible(false)
		}, 0)
		const swapTimerId = window.setTimeout(() => {
			setConfigPathname(pathname)
		}, NAVBAR_LAYOUT_CONFIG.contentTransitionMs)

		return () => {
			window.clearTimeout(hideTimerId)
			window.clearTimeout(swapTimerId)
		}
	}, [pathname, configPathname])

	useEffect(() => {
		if (isVisible || configPathname !== pathname) {
			return
		}

		const animationFrameId = window.requestAnimationFrame(() => {
			updateWidth()
			setIsVisible(true)
		})

		return () => {
			window.cancelAnimationFrame(animationFrameId)
		}
	}, [isVisible, configPathname, pathname, updateWidth])

	useEffect(() => {
		const contentElement = contentRef.current

		if (!contentElement) {
			return
		}

		const resizeObserver = new ResizeObserver(() => {
			window.requestAnimationFrame(updateWidth)
		})

		resizeObserver.observe(contentElement)

		const animationFrameId = window.requestAnimationFrame(updateWidth)

		return () => {
			window.cancelAnimationFrame(animationFrameId)
			resizeObserver.disconnect()
		}
	}, [updateWidth])

	const currentConfig = resolveNavbarConfig(configPathname)
	const navWidth = contentWidth ? `${contentWidth}px` : undefined
	const navStyle = {
		width: navWidth,
	} as CSSProperties

	return (
		<div className={styles.shell}>
			<div aria-hidden className={styles.liquidDefs}>
				<svg xmlns="http://www.w3.org/2000/svg">
					<defs>
						<filter id="navbar-liquid" primitiveUnits="objectBoundingBox">
							<feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="1" seed="9" result="map" />
							<feGaussianBlur in="map" stdDeviation="0.1" result="mapSoft" />
							<feGaussianBlur in="SourceGraphic" stdDeviation="0.01" result="blur" />
							<feDisplacementMap in="blur" in2="mapSoft" scale="0.08" xChannelSelector="R" yChannelSelector="G" />
						</filter>
						<filter id="navbar-liquid-soft" primitiveUnits="objectBoundingBox">
							<feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="1" seed="9" result="map" />
							<feGaussianBlur in="map" stdDeviation="0.1" result="mapSoft" />
							<feGaussianBlur in="SourceGraphic" stdDeviation="0.005" result="blur" />
							<feDisplacementMap in="blur" in2="mapSoft" scale="0.04" xChannelSelector="R" yChannelSelector="G" />
						</filter>
					</defs>
				</svg>
			</div>
			<nav className={styles.nav} ref={navRef} style={navStyle}>
				<div className={styles.content} ref={contentRef}>
					<div className={styles.logo}>
						<button className={styles.logoButton} onClick={handleLogoClick} type="button">
							<h6>Olga Alagirova</h6>
						</button>
					</div>
					<div className={clsx(styles.group, !isVisible && styles.hidden)}>
						{currentConfig.anchors.map((item) => (
							<NavbarItem key={`${item.to}-${item.label}`} text={item.label} to={item.to} theme={item.theme} />
						))}
					</div>
					<div className={clsx(styles.group, !isVisible && styles.hidden)}>
						{currentConfig.pageLinks.map((item) => (
							<NavbarItem key={`${item.to}-${item.label}`} text={item.label} to={item.to} theme={item.theme} />
						))}
					</div>
				</div>
			</nav>
		</div>
	)
}

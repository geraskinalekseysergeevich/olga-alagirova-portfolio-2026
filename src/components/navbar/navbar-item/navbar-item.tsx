import clsx from 'clsx'
import type { MouseEventHandler } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './navbar-item.module.css'

type NavbarItemProps = {
	text: string
	to: string
	theme?: 'light' | 'dark'
	onClick?: MouseEventHandler<HTMLAnchorElement>
	compact?: boolean
}

export const NavbarItem = ({ text, to, theme = 'light', onClick, compact = false }: NavbarItemProps) => {
	return (
		<NavLink
			className={clsx(
				styles.button,
				theme === 'light' ? styles.buttonLight : styles.buttonDark,
				compact && styles.buttonCompact,
			)}
			onClick={onClick}
			to={to}
		>
			<p className={clsx('caption', styles.text, compact && styles.textCompact)}>{text}</p>
		</NavLink>
	)
}

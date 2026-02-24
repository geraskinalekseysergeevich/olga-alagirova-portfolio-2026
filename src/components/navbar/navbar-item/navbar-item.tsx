import clsx from 'clsx'
import { NavLink } from 'react-router-dom'

import styles from './navbar-item.module.css'

type NavbarItemProps = {
	text: string
	to: string
	theme?: 'light' | 'dark'
}

export const NavbarItem = ({ text, to, theme = 'light' }: NavbarItemProps) => {
	return (
		<NavLink className={clsx(styles.button, theme === 'dark' && styles.buttonDark)} to={to}>
			<p className={`caption ${styles.text}`}>{text}</p>
		</NavLink>
	)
}

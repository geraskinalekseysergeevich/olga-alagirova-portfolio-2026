import { CV_ROUTE } from '../../router'
import styles from './navbar.module.css'
import { NavbarItem } from './navbar-item/navbar-item'

type NavItem = {
	label: string
	to: string
}

const NAV_ITEMS: NavItem[] = [
	{ label: 'Brand Cases', to: '/#brand-cases' },
	{ label: 'Typography & Others', to: '/#typography-others' },
	{ label: 'Contacts', to: '/#contacts' },
]

export const Navbar = () => {
	return (
		<nav className={styles.nav}>
			<div className={styles.left}>
				<h6>Olga Alagirova</h6>
			</div>
			<div className={styles.actions}>
				{NAV_ITEMS.map((item, index: number) => (
					<NavbarItem key={index} text={item.label} to={item.to} />
				))}
			</div>
			<NavbarItem text="CV" to={CV_ROUTE} theme="dark" />
		</nav>
	)
}

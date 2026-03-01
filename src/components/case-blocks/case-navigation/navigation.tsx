import { NavbarItem } from '../../navbar/navbar-item/navbar-item'
import styles from './navigation.module.css'
import type { AnchorConfig } from './types'

type CaseNavigationProps = {
	anchors: AnchorConfig[]
}

export const CaseNavigation = ({ anchors }: CaseNavigationProps) => {
	return (
		<div className={styles.container}>
			{anchors.map((anchor, index) => (
				<NavbarItem key={index} text={anchor.text} to={`#${anchor.id}`} />
			))}
		</div>
	)
}

import clsx from 'clsx'
import { NavLink } from 'react-router-dom'

import styles from './view-button.module.css'

type ViewButton = {
	to: string
}

export const ViewButton = ({ to }: ViewButton) => {
	return (
		<NavLink className={styles.button} to={to}>
			<p className={clsx('body', styles.text)}>View</p>
		</NavLink>
	)
}

import clsx from 'clsx'
import { NavLink } from 'react-router-dom'

import styles from './custom-button.module.css'

type CustomButtonProps = {
	to: string
	text: string
}

export const CustomButton = ({ to, text }: CustomButtonProps) => {
	return (
		<NavLink className={styles.button} to={to}>
			<p className={clsx('body', styles.text)}>{text}</p>
		</NavLink>
	)
}

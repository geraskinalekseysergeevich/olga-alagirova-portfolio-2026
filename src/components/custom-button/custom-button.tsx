import clsx from 'clsx'
import { NavLink } from 'react-router-dom'

import styles from './custom-button.module.css'

type CustomButtonProps = {
	to: string
	text: string
	openInNewTab?: boolean
}

export const CustomButton = ({ to, text, openInNewTab = false }: CustomButtonProps) => {
	return (
		<NavLink
			className={styles.button}
			rel={openInNewTab ? 'noopener noreferrer' : undefined}
			target={openInNewTab ? '_blank' : undefined}
			to={to}
		>
			<p className={clsx('body', styles.text)}>{text}</p>
		</NavLink>
	)
}

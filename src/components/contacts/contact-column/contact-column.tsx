import clsx from 'clsx'

import styles from './contact-column.module.css'

type ContactColumnProps = {
	name: string
	content: string
}

export const ContactColumn = ({ name, content }: ContactColumnProps) => {
	return (
		<div className={styles.container}>
			<p className={clsx('body', styles.name)}>{name}</p>
			<p className="body">{content}</p>
		</div>
	)
}

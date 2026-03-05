import clsx from 'clsx'

import { BodyText } from '../../texts/texts'
import styles from './contact-column.module.css'

type ContactColumnProps = {
	name: string
	content: string
}

export const ContactColumn = ({ name, content }: ContactColumnProps) => {
	return (
		<div className={styles.container}>
			<p className={clsx('body', styles.name)}>{name}</p>
			<BodyText text={content} customClass={styles.noWrap} />
		</div>
	)
}

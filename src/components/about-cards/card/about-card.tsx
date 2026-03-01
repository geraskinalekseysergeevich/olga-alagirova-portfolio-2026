import clsx from 'clsx'

import { BodyText } from '../../texts/texts'
import styles from './about-card.module.css'

type AboutCardProps = {
	text: string
	caption: string
	variant: 'white' | 'gray' | 'black'
}

export const AboutCard = ({ text, caption, variant }: AboutCardProps) => {
	return (
		<article
			className={clsx(styles.card, variant === 'gray' && styles.cardGray, variant === 'black' && styles.cardBlack)}
			data-about-card
		>
			<h2>{text}</h2>
			<BodyText text={caption} />
		</article>
	)
}

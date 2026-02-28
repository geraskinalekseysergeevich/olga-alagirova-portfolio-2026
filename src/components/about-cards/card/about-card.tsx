import { BodyText } from '../../texts/texts'
import styles from './about-card.module.css'

type AboutCardProps = {
	text: string
	caption: string
}

export const AboutCard = ({ text, caption }: AboutCardProps) => {
	return (
		<article className={styles.card}>
			<h2>{text}</h2>
			<BodyText text={caption} />
		</article>
	)
}

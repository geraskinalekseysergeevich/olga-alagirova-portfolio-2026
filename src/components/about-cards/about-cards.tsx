import styles from './about-cards.module.css'
import { AboutCard } from './card/about-card'
import { ABOUT_CARDS } from './data'

export const AboutCards = () => {
	return (
		<div className={styles.container}>
			{ABOUT_CARDS.map((card, index: number) => (
				<AboutCard key={index} text={card.text} caption={card.caption} />
			))}
		</div>
	)
}

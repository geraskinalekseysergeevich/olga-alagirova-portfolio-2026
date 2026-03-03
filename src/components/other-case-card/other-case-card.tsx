import { CustomButton } from '../custom-button/custom-button'
import type { OtherCase } from '../other-cases/data'
import { BodyAccentText, BodyText } from '../texts/texts'
import styles from './other-case-card.module.css'

type OtherCaseCardProps = {
	otherCase: OtherCase
}

export const OtherCaseCard = ({ otherCase }: OtherCaseCardProps) => {
	return (
		<div className={styles.card}>
			<div className={styles.image}>
				<img src={otherCase.imageSrc} alt="Case preview" className={styles.image} />
			</div>
			<div className={styles.bottom}>
				<div className={styles.texts}>
					<BodyAccentText text={otherCase.caseName} customClass={styles.caseName} />
					<h2>{otherCase.title}</h2>
					<BodyText text={otherCase.paragraph} customClass={styles.caseParagraph} />
				</div>
				<CustomButton to={otherCase.link} text="Узнать больше" />
			</div>
		</div>
	)
}

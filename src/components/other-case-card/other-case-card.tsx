import { ImageGallery } from '../image-gallery/image-gallery'
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
				<ImageGallery imagesSrc={otherCase.imagesSrc} />
			</div>
			<div className={styles.bottom}>
				<BodyAccentText text={otherCase.caseName} customClass={styles.caseName} />
				<h2>{otherCase.title}</h2>
				<BodyText text={otherCase.paragraph} customClass={styles.caseParagraph} />
			</div>
		</div>
	)
}

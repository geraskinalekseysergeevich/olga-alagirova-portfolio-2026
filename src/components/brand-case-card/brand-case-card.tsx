import type { BrandCase } from '../brand-cases/data'
import { CustomButton } from '../custom-button/custom-button'
import { ImageGallery } from '../image-gallery/image-gallery'
import { BodyAccentText, BodyText } from '../texts/texts'
import styles from './brand-case-card.module.css'

type BrandCaseCardProps = {
	brandCase: BrandCase
}

export const BrandCaseCard = ({ brandCase }: BrandCaseCardProps) => {
	return (
		<div className={styles.card}>
			<div className={styles.image}>
				<ImageGallery imagesSrc={brandCase.imagesSrc} />
			</div>
			<div className={styles.right}>
				<div className={styles.texts}>
					<BodyAccentText text={brandCase.caseName} customClass={styles.caseName} />
					<h2>{brandCase.title}</h2>
					<BodyText text={brandCase.paragraph} customClass={styles.caseParagraph} />
				</div>
				<CustomButton to={brandCase.link} text="View" />
			</div>
		</div>
	)
}

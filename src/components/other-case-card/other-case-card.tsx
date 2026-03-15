import { resolvePublicAssetUrl, resolvePublicWebpAssetUrl } from '../../utils/resolve-public-asset-url'
import { CustomButton } from '../custom-button/custom-button'
import type { OtherCase } from '../other-cases/data'
import { fixHangingPrepositions } from '../texts/fix-hanging-prepositions'
import { BodyAccentText, BodyText } from '../texts/texts'
import styles from './other-case-card.module.css'

type OtherCaseCardProps = {
	otherCase: OtherCase
}

export const OtherCaseCard = ({ otherCase }: OtherCaseCardProps) => {
	const webpPreviewSrc = resolvePublicWebpAssetUrl(otherCase.imageSrc)

	return (
		<div className={styles.card}>
			<div className={styles.imageWrap}>
				<picture className={styles.picture}>
					{webpPreviewSrc ? <source srcSet={webpPreviewSrc} type="image/webp" /> : null}
					<img src={resolvePublicAssetUrl(otherCase.imageSrc)} alt="Case preview" className={styles.image} />
				</picture>
			</div>
			<div className={styles.bottom}>
				<div className={styles.texts}>
					<BodyAccentText text={otherCase.caseName} customClass={styles.caseName} />
					<h2>{fixHangingPrepositions(otherCase.title)}</h2>
					<BodyText text={otherCase.paragraph} customClass={styles.caseParagraph} />
				</div>
				<CustomButton to={otherCase.link} text="Узнать больше" />
			</div>
		</div>
	)
}

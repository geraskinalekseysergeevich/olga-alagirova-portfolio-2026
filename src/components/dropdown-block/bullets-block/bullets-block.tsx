import type { FullTextList } from '../../../pages/cv/data-types'
import { BodyText } from '../../texts/texts'
import styles from './bullets-block.module.css'

type BulletsBlockProps = {
	fullText: FullTextList
}

export const BulletsBlock = ({ fullText }: BulletsBlockProps) => {
	return (
		<div className={styles.container}>
			{fullText.title && <BodyText text={fullText.title} />}
			<div className={styles.bullets}>
				{fullText.bullets.map((item, index) => (
					<li key={index} className={styles.bullet}>
						<BodyText text={item} />
					</li>
				))}
			</div>
		</div>
	)
}

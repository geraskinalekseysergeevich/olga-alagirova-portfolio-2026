import type { TextContent } from '../../../pages/cv/data-types'
import { BodyText } from '../../texts/texts'
import styles from './bullets-block.module.css'

type BulletsBlockProps = {
	bullets: TextContent[]
}

export const BulletsBlock = ({ bullets }: BulletsBlockProps) => {
	return (
		<div className={styles.container}>
			<ul className={styles.bullets}>
				{bullets.map((item, index) => (
					<li key={index}>
						<BodyText text={item} />
					</li>
				))}
			</ul>
		</div>
	)
}

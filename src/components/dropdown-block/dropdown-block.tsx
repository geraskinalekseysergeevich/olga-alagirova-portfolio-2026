import { useState } from 'react'

import ArrowIcon from '../../assets/icons/arrow.svg'
import type { CvCase, FullTextList } from '../../pages/cv/data-types'
import { BodyText } from '../texts/texts'
import { BulletsBlock } from './bullets-block/bullets-block'
import styles from './dropdown-block.module.css'

type DropdownBlockProps = {
	cvCase: CvCase
}

export const DropdownBlock = ({ cvCase }: DropdownBlockProps) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className={styles.container}>
			<BodyText text={cvCase.title} />
			<BodyText text={cvCase.role} customClass={styles.role} />
			<BodyText text={cvCase.previewText} />

			{cvCase.fullText && isOpen && (
				<div className={styles.cases}>
					{cvCase.fullText.map((item: FullTextList, index) => (
						<BulletsBlock key={index} fullText={item} />
					))}
				</div>
			)}

			{cvCase.fullText && (
				<button type="button" onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? (
						<img src={ArrowIcon} className={styles.rotated} alt="Closed arrow" />
					) : (
						<img src={ArrowIcon} alt="Open arrow" />
					)}
				</button>
			)}
		</div>
	)
}

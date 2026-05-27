import clsx from 'clsx'
import { useState } from 'react'

import ArrowIcon from '../../assets/icons/bottom-arrow.svg'
import type { CvCase } from '../../pages/cv/data-types'
import { BodyText } from '../texts/texts'
import { BulletsBlock } from './bullets-block/bullets-block'
import styles from './dropdown-block.module.css'

type DropdownBlockProps = {
	cvCase: CvCase
}

export const DropdownBlock = ({ cvCase }: DropdownBlockProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const hasFullText = Boolean(cvCase.fullText?.length)

	return (
		<div className={styles.container}>
			<BodyText text={cvCase.title} />
			<BodyText text={cvCase.role} customClass={styles.role} />
			{cvCase.previewText && <BodyText text={cvCase.previewText} />}

			{hasFullText && (
				<div className={clsx(styles.casesWrap, isOpen && styles.casesWrapOpen)} aria-hidden={!isOpen}>
					<div className={styles.casesInner}>
						<BulletsBlock bullets={cvCase.fullText ?? []} />
					</div>
				</div>
			)}

			{hasFullText && (
				<button
					type="button"
					className={styles.toggleButton}
					aria-expanded={isOpen}
					aria-label={isOpen ? 'Collapse details' : 'Expand details'}
					onClick={() => setIsOpen(!isOpen)}
				>
					<img src={ArrowIcon} className={clsx(styles.arrow, isOpen && styles.arrowOpen)} alt="" />
				</button>
			)}
		</div>
	)
}

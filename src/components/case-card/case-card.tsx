import clsx from 'clsx'

import type { BrandCase } from '../brand-cases/data'
import { ViewButton } from '../view-button/view-button'
import styles from './case-card.module.css'

type CaseCardProps = {
	brandCase: BrandCase
}

export const CaseCard = ({ brandCase }: CaseCardProps) => {
	return (
		<div className={styles.card}>
			<div className={styles.image}></div>
			<div className={styles.right}>
				<div className={styles.texts}>
					<p className={clsx('bodyAccent', styles.caseName)}>{brandCase.caseName}</p>
					<h2>{brandCase.title}</h2>
					<p className={clsx('body', styles.caseParagraph)}>{brandCase.paragraph}</p>
				</div>
				<ViewButton to={brandCase.link} />
			</div>
		</div>
	)
}

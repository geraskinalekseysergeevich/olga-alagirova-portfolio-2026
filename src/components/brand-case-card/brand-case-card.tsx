import clsx from 'clsx'

import type { BrandCase } from '../brand-cases/data'
import { CustomButton } from '../custom-button/custom-button'
import styles from './brand-case-card.module.css'

type BrandCaseCardProps = {
	brandCase: BrandCase
}

export const BrandCaseCard = ({ brandCase }: BrandCaseCardProps) => {
	return (
		<div className={styles.card}>
			<div className={styles.image}></div>
			<div className={styles.right}>
				<div className={styles.texts}>
					<p className={clsx('bodyAccent', styles.caseName)}>{brandCase.caseName}</p>
					<h2>{brandCase.title}</h2>
					<p className={clsx('body', styles.caseParagraph)}>{brandCase.paragraph}</p>
				</div>
				<CustomButton to={brandCase.link} text="View" />
			</div>
		</div>
	)
}

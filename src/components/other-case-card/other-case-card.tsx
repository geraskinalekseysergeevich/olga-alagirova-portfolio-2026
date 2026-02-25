import clsx from 'clsx'

import type { OtherCase } from '../other-cases/data'
import styles from './other-case-card.module.css'

type OtherCaseCardProps = {
	otherCase: OtherCase
}

export const OtherCaseCard = ({ otherCase }: OtherCaseCardProps) => {
	return (
		<div className={styles.card}>
			<div className={styles.image}></div>
			<div className={styles.bottom}>
				<p className={clsx('bodyAccent', styles.caseName)}>{otherCase.caseName}</p>
				<h2>{otherCase.title}</h2>
				<p className={clsx('body', styles.caseParagraph)}>{otherCase.paragraph}</p>
			</div>
		</div>
	)
}

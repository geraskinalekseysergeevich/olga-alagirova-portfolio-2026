import { OtherCaseCard } from '../other-case-card/other-case-card'
import { Title } from '../title/title'
import { OTHER_CASES } from './data'
import styles from './other-cases.module.css'

export const OtherCases = () => {
	return (
		<div className={styles.container}>
			<Title texts={['Typography & Others']} />
			<div className={styles.grid}>
				{OTHER_CASES.map((item, index) => (
					<OtherCaseCard key={index} otherCase={item} />
				))}
			</div>
		</div>
	)
}

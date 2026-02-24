import { CaseCard } from '../case-card/case-card'
import { Title } from '../title/title'
import styles from './brand-cases.module.css'
import { BRAND_CASES } from './data'

export const BrandCases = () => {
	return (
		<div className={styles.container}>
			<Title texts={['Brand Cases']} />
			<div className={styles.cases}>
				{BRAND_CASES.map((item, index) => (
					<CaseCard key={index} brandCase={item} />
				))}
			</div>
		</div>
	)
}

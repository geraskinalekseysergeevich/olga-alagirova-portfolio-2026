import { BodyText } from '../../texts/texts'
import { CaseTextBlock } from '../case-text-block/text-block'
import styles from './footer.module.css'

type CaseFooterProps = {
	title: string
	paragraph: string
	year: string
}

export const CaseFooter = ({ title, paragraph, year }: CaseFooterProps) => {
	return (
		<div className={styles.container}>
			<CaseTextBlock title={title} paragraph={paragraph} />
			<BodyText text={year} />
		</div>
	)
}

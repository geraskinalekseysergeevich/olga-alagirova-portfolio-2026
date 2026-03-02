import { BodyText } from '../../texts/texts'
import { CaseTextBlock } from '../case-text-block/text-block'
import styles from './footer.module.css'

type CaseFooterProps = {
	anchorId?: string
	title: string
	paragraph: string
	year: string
}

export const CaseFooter = ({ anchorId, title, paragraph, year }: CaseFooterProps) => {
	return (
		<section id={anchorId}>
			<div className={styles.container}>
				<CaseTextBlock title={title} paragraph={paragraph} />
				<BodyText text={year} />
			</div>
		</section>
	)
}

import { BodyAccentText, BodyText } from '../../texts/texts'
import styles from './text-block.module.css'

type CaseTextBlockProps = {
	anchorId?: string
	title: string
	paragraph: string
}

export const CaseTextBlock = ({ anchorId, title, paragraph }: CaseTextBlockProps) => {
	return (
		<section id={anchorId}>
			<div className={styles.container}>
				<BodyAccentText text={title} />
				<BodyText text={paragraph} />
			</div>
		</section>
	)
}

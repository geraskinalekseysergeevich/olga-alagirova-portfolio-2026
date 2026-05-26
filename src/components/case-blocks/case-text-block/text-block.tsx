import { BodyAccentText, BodyText } from '../../texts/texts'
import styles from './text-block.module.css'

type CaseTextBlockProps = {
	anchorId?: string
	title: string
	paragraph?: string
	paragraphs?: string[]
}

export const CaseTextBlock = ({ anchorId, title, paragraph, paragraphs }: CaseTextBlockProps) => {
	const content = paragraphs ?? (paragraph ? [paragraph] : [])

	return (
		<section id={anchorId}>
			<div className={styles.container}>
				<BodyAccentText text={title} />
				{content.map((item, index) => (
					<BodyText key={`${anchorId ?? title}-${index}`} text={item} />
				))}
			</div>
		</section>
	)
}

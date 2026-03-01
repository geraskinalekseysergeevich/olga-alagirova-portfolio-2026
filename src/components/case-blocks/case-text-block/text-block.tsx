import { BodyAccentText, BodyText } from '../../texts/texts'
import styles from './text-block.module.css'

type CaseTextBlockProps = {
	title: string
	paragraph: string
}

export const CaseTextBlock = ({ title, paragraph }: CaseTextBlockProps) => {
	return (
		<div className={styles.container}>
			<BodyAccentText text={title} />
			<BodyText text={paragraph} />
		</div>
	)
}

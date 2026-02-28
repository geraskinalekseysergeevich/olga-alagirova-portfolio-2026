import { BodyText } from '../texts/texts'
import styles from './title.module.css'

type TitleProps = {
	texts: string[]
	scrollDownText?: boolean
}

export const Title = ({ texts, scrollDownText = false }: TitleProps) => {
	return (
		<div className={styles.container}>
			<div>
				{texts.map((text: string, index: number) => (
					<h1 key={index}>{text}</h1>
				))}
			</div>
			{scrollDownText && <BodyText text="Scroll down" customClass={styles.gray} />}
		</div>
	)
}

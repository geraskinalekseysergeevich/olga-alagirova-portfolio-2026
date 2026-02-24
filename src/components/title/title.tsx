import styles from './title.module.css'

type TitleProps = {
	texts: string[]
}

export const Title = ({ texts }: TitleProps) => {
	return (
		<div className={styles.container}>
			{texts.map((text: string, index: number) => (
				<h1 key={index}>{text}</h1>
			))}
		</div>
	)
}

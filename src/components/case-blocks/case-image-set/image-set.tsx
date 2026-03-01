import styles from './image-set.module.css'

type CaseImageSetProps = {
	imagesSrc: string[]
}

export const CaseImageSet = ({ imagesSrc }: CaseImageSetProps) => {
	return (
		<div className={styles.container}>
			{imagesSrc.map((imgSrc, index) => (
				<img key={index} src={imgSrc} alt="Project Image" className={styles.image} />
			))}
		</div>
	)
}

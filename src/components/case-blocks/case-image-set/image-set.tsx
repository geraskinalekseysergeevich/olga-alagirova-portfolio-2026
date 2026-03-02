import styles from './image-set.module.css'

type CaseImageSetProps = {
	anchorId?: string
	imagesSrc: string[]
}

export const CaseImageSet = ({ anchorId, imagesSrc }: CaseImageSetProps) => {
	return (
		<section id={anchorId}>
			<div className={styles.container}>
				{imagesSrc.map((imgSrc, index) => (
					<img key={index} src={imgSrc} alt="Project Image" className={styles.image} />
				))}
			</div>
		</section>
	)
}

import { CaseVideo } from '../case-video/video'
import styles from './image-set.module.css'

type CaseImageSetProps = {
	anchorId?: string
	imagesSrc: string[]
}

export const CaseImageSet = ({ anchorId, imagesSrc }: CaseImageSetProps) => {
	const isVideoSrc = (src: string) => {
		const normalizedSrc = src.split('#')[0].split('?')[0].toLowerCase()
		return normalizedSrc.endsWith('.mp4')
	}

	return (
		<section id={anchorId}>
			<div className={styles.container}>
				{imagesSrc.map((src, index) =>
					isVideoSrc(src) ? (
						<CaseVideo key={index} src={src} />
					) : (
						<img key={index} src={src} alt="Project Image" className={styles.image} />
					),
				)}
			</div>
		</section>
	)
}

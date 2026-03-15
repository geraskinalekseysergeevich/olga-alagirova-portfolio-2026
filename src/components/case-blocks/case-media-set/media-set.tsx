import { resolvePublicAssetUrl } from '../../../utils/resolve-public-asset-url'
import { CaseVideo } from '../case-video/video'
import styles from './media-set.module.css'

type CaseMediaSetProps = {
	anchorId?: string
	imagesSrc: string[]
	priority?: boolean
}

export const CaseMediaSet = ({ anchorId, imagesSrc, priority = false }: CaseMediaSetProps) => {
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
						<img
							key={index}
							src={resolvePublicAssetUrl(src)}
							alt="Project Image"
							className={styles.image}
							decoding="async"
							fetchPriority={priority && index === 0 ? 'high' : 'auto'}
							loading={priority && index === 0 ? 'eager' : 'lazy'}
						/>
					),
				)}
			</div>
		</section>
	)
}

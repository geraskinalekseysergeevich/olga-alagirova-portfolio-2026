import { resolvePublicAssetUrl, resolvePublicWebpAssetUrl } from '../../../utils/resolve-public-asset-url'
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
				{imagesSrc.map((src, index) => {
					if (isVideoSrc(src)) {
						return <CaseVideo key={index} src={src} />
					}

					const webpSrc = resolvePublicWebpAssetUrl(src)

					return (
						<picture className={styles.picture} key={index}>
							{webpSrc ? <source srcSet={webpSrc} type="image/webp" /> : null}
							<img
								src={resolvePublicAssetUrl(src)}
								alt="Project Image"
								className={styles.image}
								decoding="async"
								fetchPriority={priority && index === 0 ? 'high' : 'auto'}
							/>
						</picture>
					)
				})}
			</div>
		</section>
	)
}

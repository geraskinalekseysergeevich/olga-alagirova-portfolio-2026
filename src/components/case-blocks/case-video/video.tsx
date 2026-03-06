import { resolvePublicAssetUrl } from '../../../utils/resolve-public-asset-url'
import styles from './video.module.css'

type CaseVideoProps = {
	src?: string
}

export const CaseVideo = ({ src }: CaseVideoProps) => {
	return (
		<video
			autoPlay
			className={styles.video}
			loop
			muted
			playsInline
			preload="metadata"
			src={src ? resolvePublicAssetUrl(src) : src}
		/>
	)
}

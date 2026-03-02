import { CaseVideo } from '../video'
import styles from './video-reels.module.css'

type CaseVideoReelsProps = {
	src: string
}

export const CaseVideoReels = ({ src }: CaseVideoReelsProps) => {
	return (
		<div className={styles.container}>
			<CaseVideo src={src} />
		</div>
	)
}

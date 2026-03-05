import Avatar from '../../assets/cv/avatar.jpg'
import Clip from '../../assets/cv/clip.svg'
import { ShakeAnimation } from '../shake-animation/shake-animation'
import styles from './avatar-composition.module.css'

export const AvatarComposition = () => {
	return (
		<div className={styles.container}>
			<img src={Clip} alt="Clip icon" className={styles.clip} />
			<ShakeAnimation className={styles.avatarFrame} baseAngleDeg={-5} transformOrigin="52% -20px" durationMs={850}>
				<img src={Avatar} alt="Avatar image" className={styles.avatar} />
			</ShakeAnimation>
		</div>
	)
}

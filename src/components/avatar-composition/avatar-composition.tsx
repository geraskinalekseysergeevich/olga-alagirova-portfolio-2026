import Avatar from '../../assets/cv/avatar.jpg'
import Clip from '../../assets/cv/clip.svg'
import styles from './avatar-composition.module.css'

export const AvatarComposition = () => {
	return (
		<div className={styles.container}>
			<img src={Clip} alt="Clip icon" className={styles.clip} />
			<img src={Avatar} alt="Avatar image" className={styles.avatar} />
		</div>
	)
}

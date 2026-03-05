import Aduney from '../../assets/stickers/aduney.svg'
import AplasticE from '../../assets/stickers/aplastic-e.svg'
import AplasticPlanet from '../../assets/stickers/aplastic-planet.svg'
import Earphone from '../../assets/stickers/earphone.svg'
import HahnanagasStickers from '../../assets/stickers/hahnanagas.svg'
import Molecule from '../../assets/stickers/molecule.svg'
import Skater from '../../assets/stickers/skater.svg'
import VkLightHand from '../../assets/stickers/vk-lights-hand.svg'
import VkLightMan from '../../assets/stickers/vk-lights-man.svg'
import { Title } from '../title/title'
import styles from './start-screen.module.css'

type StickerPositionClass =
	| 'aplasticE'
	| 'aduney'
	| 'aplasticPlanet'
	| 'earphone'
	| 'hahnanagas'
	| 'molecule'
	| 'skater'
	| 'vkLightHand'
	| 'vkLightMan'

type StickerConfig = {
	id: string
	src: string
	positionClass: StickerPositionClass
}

const STICKERS: StickerConfig[] = [
	{ id: 'aplastic-e', src: AplasticE, positionClass: 'aplasticE' },
	{ id: 'aplastic-planet', src: AplasticPlanet, positionClass: 'aplasticPlanet' },
	{ id: 'hahnanagas', src: HahnanagasStickers, positionClass: 'hahnanagas' },
	{ id: 'aduney', src: Aduney, positionClass: 'aduney' },
	{ id: 'vk-light-hand', src: VkLightHand, positionClass: 'vkLightHand' },
	{ id: 'vk-light-man', src: VkLightMan, positionClass: 'vkLightMan' },
	{ id: 'molecule', src: Molecule, positionClass: 'molecule' },
	{ id: 'earphone', src: Earphone, positionClass: 'earphone' },
	{ id: 'skater', src: Skater, positionClass: 'skater' },
]

export const StartScreen = () => {
	return (
		<section className={styles.container}>
			<div aria-hidden className={styles.stickersLayer}>
				{STICKERS.map((sticker) => (
					<img
						key={sticker.id}
						alt=""
						className={`${styles.sticker} ${styles[sticker.positionClass]}`}
						src={sticker.src}
					/>
				))}
			</div>
			<div className={styles.content}>
				<Title texts={['Olga Alagirova', 'Brand & Communication', 'Designer']} scrollDownText />
			</div>
		</section>
	)
}

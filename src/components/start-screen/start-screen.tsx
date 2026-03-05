import { type CSSProperties, useEffect, useState } from 'react'

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

const SCALE_AT_1024 = 140 / 247
const VIEWPORT_MAX = 1440
const VIEWPORT_MIN = 640

const getViewportWidth = () => {
	if (typeof window === 'undefined') {
		return VIEWPORT_MAX
	}

	return window.innerWidth
}

const getStickerScale = (width: number) => {
	if (width >= VIEWPORT_MAX) {
		return 1
	}

	if (width <= VIEWPORT_MIN) {
		return SCALE_AT_1024
	}

	return SCALE_AT_1024 + ((width - VIEWPORT_MIN) * (1 - SCALE_AT_1024)) / (VIEWPORT_MAX - VIEWPORT_MIN)
}

export const StartScreen = () => {
	const [viewportWidth, setViewportWidth] = useState(getViewportWidth)

	useEffect(() => {
		const handleResize = () => {
			setViewportWidth(window.innerWidth)
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const containerStyle = {
		'--sticker-scale': `${getStickerScale(viewportWidth)}`,
	} as CSSProperties

	return (
		<section className={styles.container} style={containerStyle}>
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

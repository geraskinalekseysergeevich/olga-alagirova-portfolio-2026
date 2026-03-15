import { type MouseEvent, useEffect, useState } from 'react'

import { resolvePublicAssetUrl, resolvePublicWebpAssetUrl } from '../../utils/resolve-public-asset-url'
import styles from './image-gallery.module.css'

type ImageGalleryProps = {
	imagesSrc: string[]
	autoSlideMs?: number
	altPrefix?: string
}

export const ImageGallery = ({ imagesSrc, autoSlideMs = 4000, altPrefix = 'Gallery image' }: ImageGalleryProps) => {
	const [activeIndex, setActiveIndex] = useState(0)
	const [timerResetKey, setTimerResetKey] = useState(0)
	const [instanceAutoSlideMs] = useState(() => {
		const jitter = Math.round(autoSlideMs * 0.2)
		const randomOffset = Math.floor(Math.random() * (jitter * 2 + 1)) - jitter

		return Math.max(1500, autoSlideMs + randomOffset)
	})
	const safeActiveIndex = imagesSrc.length > 0 ? activeIndex % imagesSrc.length : 0

	useEffect(() => {
		if (imagesSrc.length <= 1) {
			return
		}

		const intervalId = window.setInterval(() => {
			setActiveIndex((prevIndex) => (prevIndex + 1) % imagesSrc.length)
		}, instanceAutoSlideMs)

		return () => {
			window.clearInterval(intervalId)
		}
	}, [imagesSrc.length, instanceAutoSlideMs, timerResetKey])

	const handleDotClick = (index: number) => {
		setActiveIndex(index)
		setTimerResetKey((prevKey) => prevKey + 1)
	}

	const handleDotMouseUp = (event: MouseEvent<HTMLButtonElement>) => {
		event.currentTarget.blur()
	}

	if (imagesSrc.length === 0) {
		return <div className={styles.container}></div>
	}

	return (
		<div className={styles.container}>
			<div className={styles.track} style={{ transform: `translateX(-${safeActiveIndex * 100}%)` }}>
				{imagesSrc.map((src, index) => {
					const webpSrc = resolvePublicWebpAssetUrl(src)

					return (
						<div className={styles.slide} key={`${src}-${index}`}>
							<picture className={styles.picture}>
								{webpSrc ? <source srcSet={webpSrc} type="image/webp" /> : null}
								<img
									className={styles.image}
									src={resolvePublicAssetUrl(src)}
									alt={`${altPrefix} ${index + 1}`}
									loading={index === 0 ? 'eager' : 'lazy'}
								/>
							</picture>
						</div>
					)
				})}
			</div>
			{imagesSrc.length > 1 ? (
				<div className={styles.dots}>
					{imagesSrc.map((_, index) => (
						<button
							type="button"
							key={`dot-${index}`}
							className={`${styles.dot} ${index === safeActiveIndex ? styles.dotActive : ''}`}
							onClick={() => handleDotClick(index)}
							onMouseUp={handleDotMouseUp}
							aria-label={`Go to slide ${index + 1}`}
							aria-pressed={index === safeActiveIndex}
						></button>
					))}
				</div>
			) : null}
		</div>
	)
}

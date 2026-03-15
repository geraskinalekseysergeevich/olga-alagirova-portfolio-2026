import { useEffect, useRef, useState } from 'react'

import { resolvePublicAssetUrl } from '../../../utils/resolve-public-asset-url'
import styles from './video.module.css'

type CaseVideoProps = {
	src?: string
}

export const CaseVideo = ({ src }: CaseVideoProps) => {
	const supportsIntersectionObserver = typeof window !== 'undefined' && 'IntersectionObserver' in window
	const videoRef = useRef<HTMLVideoElement>(null)
	const [isVisible, setIsVisible] = useState(!supportsIntersectionObserver)
	const [shouldLoad, setShouldLoad] = useState(!supportsIntersectionObserver)

	useEffect(() => {
		const videoElement = videoRef.current

		if (!videoElement || !src) {
			return
		}

		if (!supportsIntersectionObserver) {
			return
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry) {
					return
				}

				if (entry.isIntersecting) {
					setShouldLoad(true)
					setIsVisible(true)
					return
				}

				setIsVisible(false)
			},
			{
				rootMargin: '300px 0px',
				threshold: 0.01,
			},
		)

		observer.observe(videoElement)

		return () => {
			observer.disconnect()
		}
	}, [src, supportsIntersectionObserver])

	useEffect(() => {
		const videoElement = videoRef.current

		if (!videoElement || !shouldLoad) {
			return
		}

		if (isVisible) {
			const playPromise = videoElement.play()
			playPromise?.catch(() => {})
			return
		}

		videoElement.pause()
	}, [isVisible, shouldLoad])

	return (
		<video
			className={styles.video}
			loop
			muted
			playsInline
			preload={shouldLoad ? 'metadata' : 'none'}
			ref={videoRef}
			src={shouldLoad && src ? resolvePublicAssetUrl(src) : undefined}
		/>
	)
}

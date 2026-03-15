import { useEffect, useState } from 'react'

import { resolvePublicAssetUrl } from '../../../utils/resolve-public-asset-url'
import styles from './video.module.css'

type CaseVideoProps = {
	src?: string
}

const VIDEO_LOAD_FALLBACK_TIMEOUT_MS = 15000

const waitForPageImages = () => {
	const pendingImages = Array.from(document.images).filter((imageElement) => !imageElement.complete)

	if (pendingImages.length === 0) {
		return {
			promise: Promise.resolve(),
			cleanup: () => {},
		}
	}

	let remainingImages = pendingImages.length
	let resolved = false
	let resolvePromise: (() => void) | null = null

	const handleImageDone = () => {
		if (resolved) {
			return
		}

		remainingImages -= 1

		if (remainingImages > 0) {
			return
		}

		resolved = true
		removeListeners()
		resolvePromise?.()
	}

	const removeListeners = () => {
		pendingImages.forEach((imageElement) => {
			imageElement.removeEventListener('load', handleImageDone)
			imageElement.removeEventListener('error', handleImageDone)
		})
	}

	const promise = new Promise<void>((resolve) => {
		resolvePromise = resolve
		pendingImages.forEach((imageElement) => {
			imageElement.addEventListener('load', handleImageDone)
			imageElement.addEventListener('error', handleImageDone)
		})
	})

	return {
		promise,
		cleanup: removeListeners,
	}
}

export const CaseVideo = ({ src }: CaseVideoProps) => {
	const [shouldLoad, setShouldLoad] = useState(false)

	useEffect(() => {
		if (!src) {
			return
		}

		let isDisposed = false
		const { promise, cleanup } = waitForPageImages()
		const fallbackTimerId = window.setTimeout(() => {
			if (isDisposed) {
				return
			}

			setShouldLoad(true)
		}, VIDEO_LOAD_FALLBACK_TIMEOUT_MS)

		promise.then(() => {
			if (isDisposed) {
				return
			}

			window.clearTimeout(fallbackTimerId)
			setShouldLoad(true)
		})

		return () => {
			isDisposed = true
			cleanup()
			window.clearTimeout(fallbackTimerId)
		}
	}, [src])

	return (
		<video
			autoPlay
			className={styles.video}
			loop
			muted
			playsInline
			preload={shouldLoad ? 'metadata' : 'none'}
			src={shouldLoad && src ? resolvePublicAssetUrl(src) : undefined}
		/>
	)
}

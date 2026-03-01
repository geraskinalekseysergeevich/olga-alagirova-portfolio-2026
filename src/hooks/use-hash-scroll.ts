import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const useHashScroll = () => {
	const { hash } = useLocation()

	useEffect(() => {
		if (!hash) {
			return
		}

		const targetId = decodeURIComponent(hash.slice(1))
		const targetElement = document.getElementById(targetId)

		if (!targetElement) {
			return
		}

		requestAnimationFrame(() => {
			targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
		})
	}, [hash])
}

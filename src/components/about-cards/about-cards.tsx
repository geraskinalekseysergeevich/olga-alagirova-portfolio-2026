import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'

import styles from './about-cards.module.css'
import { AboutCard } from './card/about-card'
import { ABOUT_CARDS } from './data'

gsap.registerPlugin(ScrollTrigger)

const ABOUT_CARDS_ANIMATION_CONFIG = {
	scaleStart: 'top 60%',
	scaleEnd: 'bottom 60%',
	pinStart: 'bottom 60%',
	minScale: 0.8,
	scrub: 0.5,
	equalizeHeights: true,
} as const

export const AboutCards = () => {
	const containerRef = useRef<HTMLDivElement>(null)

	const resolveVariant = (index: number): 'white' | 'gray' | 'black' => {
		if (index % 3 === 1) {
			return 'gray'
		}

		if (index % 3 === 2) {
			return 'black'
		}

		return 'white'
	}

	useLayoutEffect(() => {
		const containerElement = containerRef.current

		if (!containerElement) {
			return
		}

		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			return
		}

		const cards = gsap.utils.toArray<HTMLElement>('[data-about-card]', containerElement)

		if (cards.length < 2) {
			return
		}

		const syncCardHeights = () => {
			if (!ABOUT_CARDS_ANIMATION_CONFIG.equalizeHeights) {
				return
			}

			cards.forEach((card) => {
				card.style.height = 'auto'
			})

			const maxHeight = Math.ceil(Math.max(...cards.map((card) => card.getBoundingClientRect().height)))

			cards.forEach((card) => {
				card.style.height = `${maxHeight}px`
			})
		}

		syncCardHeights()
		ScrollTrigger.addEventListener('refreshInit', syncCardHeights)

		const gsapContext = gsap.context(() => {
			const lastCardIndex = cards.length - 1
			const lastCardPinBoundary = ScrollTrigger.create({
				trigger: cards[lastCardIndex],
				start: ABOUT_CARDS_ANIMATION_CONFIG.pinStart,
			})

			cards.forEach((card) => {
				const scaleTween = gsap.to(card, {
					scale: ABOUT_CARDS_ANIMATION_CONFIG.minScale,
					ease: 'none',
				})

				ScrollTrigger.create({
					trigger: card,
					start: ABOUT_CARDS_ANIMATION_CONFIG.scaleStart,
					end: ABOUT_CARDS_ANIMATION_CONFIG.scaleEnd,
					scrub: ABOUT_CARDS_ANIMATION_CONFIG.scrub,
					animation: scaleTween,
					invalidateOnRefresh: true,
				})

				ScrollTrigger.create({
					trigger: card,
					start: ABOUT_CARDS_ANIMATION_CONFIG.pinStart,
					end: () => lastCardPinBoundary.start,
					pin: true,
					pinSpacing: false,
					invalidateOnRefresh: true,
				})

				return
			})

			ScrollTrigger.refresh()
		}, containerElement)

		return () => {
			ScrollTrigger.removeEventListener('refreshInit', syncCardHeights)
			const cards = gsap.utils.toArray<HTMLElement>('[data-about-card]', containerElement)

			cards.forEach((card) => {
				card.style.height = ''
			})
			gsapContext.revert()
		}
	}, [])

	return (
		<div className={styles.container} ref={containerRef}>
			{ABOUT_CARDS.map((card, index: number) => (
				<AboutCard key={index} text={card.text} caption={card.caption} variant={resolveVariant(index)} />
			))}
		</div>
	)
}

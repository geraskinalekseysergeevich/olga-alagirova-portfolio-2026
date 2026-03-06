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
	scrub: true,
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

		const gsapContext = gsap.context(() => {
			const lastCardIndex = cards.length - 1
			const lastCard = cards[lastCardIndex]

			cards.forEach((card, index) => {
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

				if (index === lastCardIndex) {
					return
				}

				ScrollTrigger.create({
					trigger: card,
					start: ABOUT_CARDS_ANIMATION_CONFIG.pinStart,
					endTrigger: lastCard,
					end: ABOUT_CARDS_ANIMATION_CONFIG.pinStart,
					pin: true,
					pinSpacing: false,
					invalidateOnRefresh: true,
				})
			})

			ScrollTrigger.refresh()
		}, containerElement)

		return () => {
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

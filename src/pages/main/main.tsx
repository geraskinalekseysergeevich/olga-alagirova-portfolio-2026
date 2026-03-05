import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'

import { AboutCards } from '../../components/about-cards/about-cards'
import { BrandCases } from '../../components/brand-cases/brand-cases'
import { Contacts } from '../../components/contacts/contacts'
import { OtherCases } from '../../components/other-cases/other-cases'
import { StartScreen } from '../../components/start-screen/start-screen'
import { useHashScroll } from '../../hooks/use-hash-scroll'
import styles from './main.module.css'

gsap.registerPlugin(ScrollTrigger)

export const MainPage = () => {
	const sceneRef = useRef<HTMLDivElement>(null)
	const startScreenRef = useRef<HTMLDivElement>(null)
	const aboutSectionRef = useRef<HTMLElement>(null)

	useHashScroll()

	useLayoutEffect(() => {
		const sceneElement = sceneRef.current
		const startScreenElement = startScreenRef.current
		const aboutSectionElement = aboutSectionRef.current
		const stickersLayerElement = startScreenElement?.querySelector<HTMLElement>('[data-start-screen-stickers]')
		const contentElement = startScreenElement?.querySelector<HTMLElement>('[data-start-screen-content]')

		if (!sceneElement || !startScreenElement || !aboutSectionElement || !stickersLayerElement || !contentElement) {
			return
		}

		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			return
		}

		const gsapContext = gsap.context(() => {
			gsap.set(startScreenElement, {
				'--start-screen-blur': '0px',
				'--start-screen-opacity': 1,
			})
			gsap.set(stickersLayerElement, { y: 0 })
			gsap.set(contentElement, { y: 0 })

			gsap.to(startScreenElement, {
				'--start-screen-blur': '14px',
				'--start-screen-opacity': 0,
				ease: 'none',
				scrollTrigger: {
					trigger: aboutSectionElement,
					start: 'top 65%',
					end: 'bottom bottom',
					scrub: 0.6,
					invalidateOnRefresh: true,
				},
			})

			gsap.to(contentElement, {
				y: 110,
				ease: 'none',
				scrollTrigger: {
					trigger: aboutSectionElement,
					start: 'top 65%',
					end: 'bottom bottom',
					scrub: 0.6,
					invalidateOnRefresh: true,
				},
			})

			ScrollTrigger.create({
				trigger: aboutSectionElement,
				start: 'top 65%',
				end: 'bottom bottom',
				invalidateOnRefresh: true,
				onUpdate: (self) => {
					const travel = Math.max(0, Math.min(self.end - self.start, self.scroll() - self.start))
					gsap.set(stickersLayerElement, { y: -travel })
				},
				onRefresh: (self) => {
					const travel = Math.max(0, Math.min(self.end - self.start, self.scroll() - self.start))
					gsap.set(stickersLayerElement, { y: -travel })
				},
				onLeaveBack: () => {
					gsap.set(stickersLayerElement, { y: 0 })
				},
			})

			ScrollTrigger.refresh()
		}, sceneElement)

		return () => {
			gsapContext.revert()
		}
	}, [])

	return (
		<div className={styles.container}>
			<div className={styles.scene} ref={sceneRef}>
				<div className={styles.startScreenSticky} ref={startScreenRef}>
					<StartScreen />
				</div>
				<section className={styles.aboutOverlay} ref={aboutSectionRef}>
					<AboutCards />
				</section>
			</div>
			<section id="brand-cases">
				<BrandCases />
			</section>
			<section id="typography-others">
				<OtherCases />
			</section>
			<section id="contacts">
				<Contacts />
			</section>
		</div>
	)
}

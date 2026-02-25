import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { AboutCards } from '../../components/about-cards/about-cards'
import { BrandCases } from '../../components/brand-cases/brand-cases'
import { Contacts } from '../../components/contacts/contacts'
import { Navbar } from '../../components/navbar/navbar'
import { OtherCases } from '../../components/other-cases/other-cases'
import { Title } from '../../components/title/title'
import styles from './main.module.css'

export const MainPage = () => {
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

	return (
		<div className={styles.container}>
			<Navbar />
			<section>
				<Title texts={['Olga Alagirova', 'Brand & Communication Designer']} />
			</section>
			<section>
				<AboutCards />
			</section>
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

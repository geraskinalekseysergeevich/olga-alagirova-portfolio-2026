import { AboutCards } from '../../components/about-cards/about-cards'
import { BrandCases } from '../../components/brand-cases/brand-cases'
import { Contacts } from '../../components/contacts/contacts'
import { OtherCases } from '../../components/other-cases/other-cases'
import { StartScreen } from '../../components/start-screen/start-screen'
import { useHashScroll } from '../../hooks/use-hash-scroll'
import styles from './main.module.css'

export const MainPage = () => {
	useHashScroll()

	return (
		<div className={styles.container}>
			<StartScreen />
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

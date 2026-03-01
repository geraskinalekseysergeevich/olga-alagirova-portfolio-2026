import { Contacts } from '../../../components/contacts/contacts'
import { useHashScroll } from '../../../hooks/use-hash-scroll'
import styles from './sber-seller.module.css'

export const SberSellerPage = () => {
	useHashScroll()

	return (
		<div className={styles.container}>
			<div>sber seller</div>
			<section id="contacts">
				<Contacts />
			</section>
		</div>
	)
}

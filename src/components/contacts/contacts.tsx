import clsx from 'clsx'

import { CustomButton } from '../custom-button/custom-button'
import { Title } from '../title/title'
import { ContactColumn } from './contact-column/contact-column'
import styles from './contacts.module.css'

export const Contacts = () => {
	return (
		<div className={styles.container}>
			<Title texts={['Contacts']} />
			<div className={styles.columns}>
				<div className={clsx(styles.column, styles.left)}>
					<div className={styles.header}>
						<h2>Olga Alagirova</h2>
						<p className="body">
							Brand & Communication Designer
							<br />
							Based in Moscow
						</p>
					</div>
					<div className={styles.grid}>
						<ContactColumn name="Telegram" content="@alagirovva" />
						<ContactColumn name="Email" content="oa_365@mail.ru" />
						<ContactColumn name="Phone" content="+7 (909) 123 78-73" />
					</div>
				</div>
				<div className={clsx(styles.column, styles.right)}>
					<h2>Если хочешь вместе работать — свяжись со мной прямо сейчас!</h2>
					<CustomButton to={'https://t.me/alagirovva'} text="Написать в Telegram" />
				</div>
			</div>
		</div>
	)
}

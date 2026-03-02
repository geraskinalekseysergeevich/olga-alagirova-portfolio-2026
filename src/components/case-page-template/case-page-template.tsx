import type { ReactNode } from 'react'

import { useHashScroll } from '../../hooks/use-hash-scroll'
import { CaseNavigation } from '../case-blocks/case-navigation/navigation'
import type { AnchorConfig } from '../case-blocks/case-navigation/types'
import { Contacts } from '../contacts/contacts'
import styles from './case-page-template.module.css'

type CasePageTemplateProps = {
	navigation: AnchorConfig[]
	children: ReactNode
	header?: ReactNode
}

export const CasePageTemplate = ({ navigation, children, header }: CasePageTemplateProps) => {
	useHashScroll()

	return (
		<div className={styles.container}>
			{header}
			<div className={styles.grid}>
				<aside className={styles.navigation}>
					<CaseNavigation anchors={navigation} />
				</aside>
				<div className={styles.content}>{children}</div>
			</div>
			<section id="contacts">
				<Contacts />
			</section>
		</div>
	)
}

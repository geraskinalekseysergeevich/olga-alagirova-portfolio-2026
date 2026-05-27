import { AvatarComposition } from '../../components/avatar-composition/avatar-composition'
import { Contacts } from '../../components/contacts/contacts'
import { BulletsBlock } from '../../components/dropdown-block/bullets-block/bullets-block'
import { DropdownBlock } from '../../components/dropdown-block/dropdown-block'
import { BodyAccentText, BodyText } from '../../components/texts/texts'
import { Title } from '../../components/title/title'
import { useHashScroll } from '../../hooks/use-hash-scroll'
import styles from './cv.module.css'
import { ADDITIONAL_SECTIONS, EDUCATION_CASES, SKILL_SECTIONS, WORK_EXPERIENCE_CASES } from './data'

export const CvPage = () => {
	useHashScroll()

	return (
		<div className={styles.container}>
			<div>
				<Title texts={['Olga Alagirova', 'Brand & Communication', 'Designer']} scrollDownText />
				<AvatarComposition />
			</div>
			<div className={styles.content}>
				<div className={styles.info}>
					<BodyText text="Дизайнер и арт-директор с опытом более 4 лет в разработке креативных концепций, бренд-айдентики и digital-дизайне. Работала с крупными клиентами и запускала проект для аудиторий 100К+ пользователей." />
					<BodyText text="Сильные стороны: связывать креативные решения с целями бизнеса, выстраивать дизайн-процессы, общаться со стейкхолдерами и командой." />
				</div>
				<div className={styles.education}>
					<BodyAccentText text="Образование" />
					{EDUCATION_CASES.map((educationCase, index) => (
						<DropdownBlock key={index} cvCase={educationCase} />
					))}
				</div>
				<div className={styles.workExperience}>
					<BodyAccentText text="Опыт работы" />
					{WORK_EXPERIENCE_CASES.map((workCase, index) => (
						<DropdownBlock key={index} cvCase={workCase} />
					))}
				</div>
				<div className={styles.skills}>
					<BodyAccentText text="Навыки" />
					{SKILL_SECTIONS.map((section, index) => (
						<BulletsBlock key={index} bullets={section} />
					))}
				</div>
				<div className={styles.additional}>
					<BodyAccentText text="Дополнительно" />
					{ADDITIONAL_SECTIONS.map((section, index) => (
						<BulletsBlock key={index} bullets={section} />
					))}
				</div>
			</div>
			<section className={styles.contactsSection} id="contacts">
				<Contacts />
			</section>
		</div>
	)
}

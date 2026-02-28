import { AvatarComposition } from '../../components/avatar-composition/avatar-composition'
import { Contacts } from '../../components/contacts/contacts'
import { DropdownBlock } from '../../components/dropdown-block/dropdown-block'
import { Navbar } from '../../components/navbar/navbar'
import { BodyAccentText, BodyText } from '../../components/texts/texts'
import { Title } from '../../components/title/title'
import styles from './cv.module.css'
import { EDUCATION_CASES, MAIN_PROJECT_CASES, WORK_EXPERIENCE_CASES } from './data'

export const CvPage = () => {
	return (
		<div className={styles.container}>
			<Navbar />
			<div>
				<Title texts={['Olga Alagirova', 'Brand & Communication', 'Designer']} scrollDownText />
				<AvatarComposition />
			</div>
			<div className={styles.content}>
				<div className={styles.info}>
					<BodyText
						text="Коммуникационный и бренд-дизайнер из Москвы с опытом работы в агентской среде и на крупных бренд-проектах.
						Последовательно выросла до страшего дизайнера, отвечаю за визуальные системы от концепции и бренд-стратегии
						до внедрения в digital, печать и коммуникации."
					/>
					<BodyText
						text="Имею опыт арт-дирекшена, прямого взаимодействия с клиентами и курирования подрядчиков (3D, motion,
					разработка). Ищу позицию в найме с фокусом на долгосрочную работу с брендом и командой."
					/>
				</div>
				<div className={styles.workExperience}>
					<p className="bodyAccent">Опыт работы</p>
					{WORK_EXPERIENCE_CASES.map((workCase, index) => (
						<DropdownBlock key={index} cvCase={workCase} />
					))}
				</div>
				<div className={styles.mainProjects}>
					<p className="bodyAccent">Ключевые проекты (параллельно с агентской работой)</p>
					{MAIN_PROJECT_CASES.map((mainCase, index) => (
						<DropdownBlock key={index} cvCase={mainCase} />
					))}
				</div>
				<div className={styles.education}>
					<p className="bodyAccent">Образование</p>
					{EDUCATION_CASES.map((educationCase, index) => (
						<DropdownBlock key={index} cvCase={educationCase} />
					))}
				</div>
				<div className={styles.skills}>
					<BodyAccentText text="Навыки" />
					<BodyText text="Ai, Ps, Indd, Figma, понимание motion&3D, работа с ИИ" />
					<BodyText
						text="Cистемное и логичное мышление
              Автономность и ответственность за результат
              Презентация и навык деловой переписки
              Инициативность, умение брать на себя дополнительную ответственность
              Внимание к деталям"
					/>
					<BodyText text="И главное — хорошее чувство юмора!" />
				</div>
			</div>
			<Contacts />
		</div>
	)
}

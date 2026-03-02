import { CaseListButtons } from '../../../components/case-blocks/case-buttons/list-buttons'
import { CaseFooter } from '../../../components/case-blocks/case-footer/footer'
import { CaseImageSet } from '../../../components/case-blocks/case-image-set/image-set'
import { CasePageHeader } from '../../../components/case-blocks/case-page-header/page-header'
import { CaseTextBlock } from '../../../components/case-blocks/case-text-block/text-block'
import { CasePageTemplate } from '../../../components/case-page-template/case-page-template'
import { CASES_ROUTE, SBER_SELLER_ROUTE, VK_LIGHTS_ROUTE } from '../../../router/routes'
import { GKB_DAVYDOVSKY_ANCHORS, GkbDavydovskyAnchorId } from './anchors'

export const GkbDavydovskyPage = () => {
	return (
		<CasePageTemplate
			navigation={GKB_DAVYDOVSKY_ANCHORS}
			header={
				<CasePageHeader
					texts={['Брендинг ГКБ №23', 'им. И.В. Давыдовского']}
					imgSrc={'/cases/gkb-davydovsky/header.jpg'}
				/>
			}
		>
			<CaseTextBlock
				anchorId={GkbDavydovskyAnchorId.TASK}
				title="Задача"
				paragraph="Клиент обратился с запросом на ребрендинг. На старте — устаревший логотип, разрозненные коммуникации и типовой сайт. Нужно было: создать современную и узнаваемую айдентику, объединить сайт и коммуникации в единую систему, показать технологичность и конкурентоспособность на уровне частных клиник при этом сохранить историческое здание и обратиться в айдентике к главной художественной ценности больницы — витражам."
			/>
			<CaseImageSet imagesSrc={['/cases/gkb-davydovsky/1.jpg']} />
			<CaseTextBlock
				anchorId={GkbDavydovskyAnchorId.SOLUTION}
				title="Решение"
				paragraph="Мы разработали три концепции и выбрали одну — с метафорой пазла.
Идея простая: больница — это сложная система, где разные подразделения, специалисты и технологии работают как единый организм. Все части разные, но вместе — сильнее. Визуально это выражено через плавные геометрические формы, которые соединяются между собой. Они отсылают и к принципу пазла, и к фрагментам витражей — важной части архитектурного наследия больницы."
			/>
			<CaseImageSet imagesSrc={['/cases/gkb-davydovsky/2.jpg']} />
			<CaseTextBlock
				anchorId={GkbDavydovskyAnchorId.PHOTOSTYLE}
				title="Фотостиль"
				paragraph="Лица специалистов разделены на две части — визуальная поддержка идеи соединения. Из разных людей складывается сильная команда."
			/>
			<CaseImageSet
				imagesSrc={[
					'/cases/gkb-davydovsky/3.jpg',
					'/cases/gkb-davydovsky/4.jpg',
					'/cases/gkb-davydovsky/5.jpg',
					'/cases/gkb-davydovsky/6.jpg',
				]}
			/>
			<CaseTextBlock
				anchorId={GkbDavydovskyAnchorId.DESIGN_SYSTEM}
				title="Дизайн-система"
				paragraph="Разработали единые правила для сайта, социальных сетей, презентаций, рекламных носителей, печатных материалов, элементов навигации внутри здания. Коммуникации стали консистентными и узнаваемыми."
			/>
			<CaseImageSet
				imagesSrc={['/cases/gkb-davydovsky/7.jpg', '/cases/gkb-davydovsky/8.jpg', '/cases/gkb-davydovsky/9.jpg']}
			/>
			<CaseTextBlock
				anchorId={GkbDavydovskyAnchorId.WEBSITE}
				title="Сайт"
				paragraph="Отдельный и масштабный блок проекта — многостраничный сайт (более 15 страниц + адаптив под 4 разрешения). Спроектирована структура с акцентом на ключевые направления, создана сторителлинговая главная страница, обновлена риторика — язык стал более понятным и дружелюбным, разработан отдельный лендинг для пациентов из регионов, проходящих лечение по ОМС, подготовлены макеты для передачи разработчикам."
			/>
			<CaseImageSet imagesSrc={['/cases/gkb-davydovsky/10.jpg']} />
			<CaseFooter
				anchorId={GkbDavydovskyAnchorId.PROJECT_TEAM}
				title="Команда проекта"
				paragraph="Креативный директор — Константин Токарев Арт-дирекшн и дизайн — Ольга Алагирова"
				year="2025"
			/>
			<CaseListButtons previous={`${CASES_ROUTE}/${SBER_SELLER_ROUTE}`} next={`${CASES_ROUTE}/${VK_LIGHTS_ROUTE}`} />
		</CasePageTemplate>
	)
}

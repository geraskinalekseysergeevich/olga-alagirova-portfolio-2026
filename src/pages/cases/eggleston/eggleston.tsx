import { CaseListButtons } from '../../../components/case-blocks/case-buttons/list-buttons'
import { CaseFooter } from '../../../components/case-blocks/case-footer/footer'
import { CaseMediaSet } from '../../../components/case-blocks/case-media-set/media-set'
import { CasePageHeader } from '../../../components/case-blocks/case-page-header/page-header'
import { CaseTextBlock } from '../../../components/case-blocks/case-text-block/text-block'
import { CasePageTemplate } from '../../../components/case-page-template/case-page-template'
import { CASES_ROUTE, HAHNANAGAS_ROUTE, SOFIA_SONECHKA_ROUTE } from '../../../router/routes'
import { EGGLESTON_ANCHORS, EgglestonAnchorId } from './anchors'

export const EgglestonPage = () => {
	return (
		<CasePageTemplate
			navigation={EGGLESTON_ANCHORS}
			header={
				<CasePageHeader
					texts={['I’m at war with the obvious:', 'William Eggleston']}
					imgSrc="/cases/eggleston/header.jpg"
				/>
			}
		>
			<CaseTextBlock
				anchorId={EgglestonAnchorId.TASK}
				title="Задача"
				paragraph="Разработать каталог к выставке пионера американской цветной фотографии — Уильяма Эгглстона. Важно было не просто собрать фотографии в альбом, а создать из каталога продолжение кураторской идеи. Показать цвет как главный инструмент автора и выстроить из работ цельное визуальное высказывание."
			/>
			<CaseMediaSet imagesSrc={['/cases/eggleston/1.png']} />
			<CaseTextBlock
				anchorId={EgglestonAnchorId.CONCEPT}
				title="Концепция"
				paragraph="Я обратила внимание на ключевую особенность Эгглстона: каждая фотография почти полностью построена на одном доминирующем цвете, при этом палитра в целом — крайне разнообразная. Решение — сгруппировать работы по схожим цветовым палитрам и выстроить их в градиентную последовательность. Так выставка превращается в единый «цветовой коридор», где один оттенок перетекает в другой. Каталог построен по тому же принципу — он повторяет логику экспозиции."
			/>
			<CaseMediaSet imagesSrc={['/cases/eggleston/2.jpg']} />
			<CaseTextBlock
				anchorId={EgglestonAnchorId.CATALOG_STRUCTURE}
				title="Структура каталога"
				paragraph="Помимо фотографий в издание включена статья-интервью с автором, вставки с его цитатами. Текст статьи напечатан на цветных страницах и распределён по всему каталогу. Цвет каждой текстовой страницы строго соответствует цветовому блоку фотографий, среди которых она находится."
			/>
			<CaseMediaSet imagesSrc={['/cases/eggleston/3.jpg']} />
			<CaseTextBlock
				anchorId={EgglestonAnchorId.TYPOGRAPHY}
				title="Типографика"
				paragraph="Цитаты вынесены на полуформатные листы и набраны крупно. Использованы два шрифта: основной — Futura PT; акцентный — с характером старых американских рукописных вывесок, визуально перекликающийся с артефактами городской среды, которые часто появляются в работах Эгглстона."
			/>
			<CaseMediaSet imagesSrc={['/cases/eggleston/4.jpg']} />
			<CaseTextBlock
				anchorId={EgglestonAnchorId.DETAILS}
				title="Детали"
				paragraph="В конце каталога размещён общий план всех изображений — разворот, где можно увидеть весь цветовой градиент целиком. Книга помещена в яркую коробку-обложку с культовой фотографией автора."
			/>
			<CaseMediaSet imagesSrc={['/cases/eggleston/5.jpg', '/cases/eggleston/6.jpg']} />
			<CaseTextBlock
				anchorId={EgglestonAnchorId.ROLE}
				title="Моя роль"
				paragraph="Я разработала концепцию цветовой навигации, структуру каталога, систему набора и логику взаимодействия текста и изображения. Сверстала книгу и подготовила макет к печати."
			/>
			<CaseFooter title="Команда проекта" paragraph="Дизайн и вёрстка — Ольга Алагирова" year="2023" />
			<CaseListButtons
				previous={`${CASES_ROUTE}/${HAHNANAGAS_ROUTE}`}
				next={`${CASES_ROUTE}/${SOFIA_SONECHKA_ROUTE}`}
			/>
		</CasePageTemplate>
	)
}

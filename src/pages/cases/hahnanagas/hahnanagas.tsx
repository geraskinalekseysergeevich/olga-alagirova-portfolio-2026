import { CaseListButtons } from '../../../components/case-blocks/case-buttons/list-buttons'
import { CaseFooter } from '../../../components/case-blocks/case-footer/footer'
import { CaseMediaSet } from '../../../components/case-blocks/case-media-set/media-set'
import { CasePageHeader } from '../../../components/case-blocks/case-page-header/page-header'
import { CaseTextBlock } from '../../../components/case-blocks/case-text-block/text-block'
import { CasePageTemplate } from '../../../components/case-page-template/case-page-template'
import { CASES_ROUTE, EGGLESTON_ROUTE, VK_LIGHTS_ROUTE } from '../../../router/routes'
import { HAHNANAGAS_ANCHORS, HahnanagasAnchorId } from './anchors'

export const HahnanagasPage = () => {
	return (
		<CasePageTemplate
			navigation={HAHNANAGAS_ANCHORS}
			header={<CasePageHeader texts={['Айдентика тревел-шоу', 'в Абахзии']} imgSrc={'/cases/hahnanagas/header.jpg'} />}
		>
			<CaseTextBlock
				anchorId={HahnanagasAnchorId.TASK}
				title="Задача"
				paragraph="Создать современную, яркую айдентику для тревел-шоу «Хахананагаз» («Куда нас занесло»), где ведущий из Абхазии путешествует по миру и встречается с абхазами-эмигрантами. Важно было визуально показать масштаб диаспоры и сделать продукт привлекательным именно для абхазской аудитории, не пытаясь конкурировать с крупными российскими тревел-форматами."
			/>
			<CaseMediaSet imagesSrc={['/cases/hahnanagas/1.jpg']} />
			<CaseTextBlock
				anchorId={HahnanagasAnchorId.PROCESS}
				title="Процесс и стратегия"
				paragraph="Проект не был линейным. Мы перебрали несколько концепций, прежде чем нашли нужную. В ходе серии обсуждений я помогла клиентам конкретизировать задачу и определить ядро целевой аудитории — абхазы, отказаться от идеи «конкурировать с российским рынком» и сфокусироваться на локальной проблеме. Мы намеренно выбрали простые образы, связанные с путешествиями, ведь тревел-шоу впервые запущено на локальном рынке и намерено привлечь абхазов к тревел-контенту."
			/>
			<CaseMediaSet imagesSrc={['/cases/hahnanagas/2.jpg']} />
			<CaseTextBlock
				anchorId={HahnanagasAnchorId.CONCEPT}
				title="Концепция"
				paragraph="В основе айдентики — визуальная метафора путешествия через авиационные артефакты: багажные стикеры, наклейки из разных стран, посадочные талоны, следы «наклеивания» как графический прием. Айдентика получилась: яркой и кликабельной для YouTube, простой в использовании, дружелюбной и живой, легко масштабируемой для ТВ и digital."
			/>
			<CaseMediaSet imagesSrc={['/cases/hahnanagas/video/intro.mp4']} />
			<CaseTextBlock
				anchorId={HahnanagasAnchorId.LOGO_TYPOGRAPHY}
				title="Логотип и типографика"
				paragraph="Название «Хахананагаз» набрано крупно, а из буквы «н» выходит указатель, направленный в разные стороны — прямая отсылка к смыслу «куда нас занесло». В анимационной заставке указатель вращается и останавливается на стране выпуска — после чего появляется ее название. Мы выбрали акцентный шрифт, который поддерживает абхазский язык, и сделали его константой фирменного стиля."
			/>
			<CaseMediaSet imagesSrc={['/cases/hahnanagas/3.jpg', '/cases/hahnanagas/4.jpg', '/cases/hahnanagas/5.jpg']} />
			<CaseTextBlock
				anchorId={HahnanagasAnchorId.ANIMATION}
				title="Анимация"
				paragraph="Идея наклеивания стикеров продолжена в motion-дизайне: заставка шоу, появление цитат, обозначение локаций, справочные вставки. Дополнительно я разработала шаблоны сторис для продвижения выпусков в соцсетях ТВ-канала."
			/>
			<CaseMediaSet imagesSrc={['/cases/hahnanagas/6.jpg']} />
			<CaseTextBlock
				anchorId={HahnanagasAnchorId.RESULT}
				title="Результат"
				paragraph="Премьерный выпуск уже вышел на YouTube и на абхазском ТВ. Более 3 000 просмотров и позитивные комментарии — в том числе о визуальном оформлении. Проект реализован, айдентика работает и масштабируется на новые выпуски."
			/>
			<CaseMediaSet imagesSrc={['/cases/hahnanagas/7.jpg']} />
			<CaseFooter title="Команда проекта" paragraph="Концепция и дизайн — Ольга Алагирова" year="2026" />
			<CaseListButtons previous={`${CASES_ROUTE}/${VK_LIGHTS_ROUTE}`} next={`${CASES_ROUTE}/${EGGLESTON_ROUTE}`} />
		</CasePageTemplate>
	)
}

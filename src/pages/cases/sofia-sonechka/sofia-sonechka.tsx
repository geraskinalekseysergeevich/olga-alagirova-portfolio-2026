import { CaseListButtons } from '../../../components/case-blocks/case-buttons/list-buttons'
import { CaseFooter } from '../../../components/case-blocks/case-footer/footer'
import { CaseMediaSet } from '../../../components/case-blocks/case-media-set/media-set'
import { CasePageHeader } from '../../../components/case-blocks/case-page-header/page-header'
import { CaseTextBlock } from '../../../components/case-blocks/case-text-block/text-block'
import { CasePageTemplate } from '../../../components/case-page-template/case-page-template'
import { APLASTIC_ROUTE, CASES_ROUTE, EGGLESTON_ROUTE } from '../../../router/routes'
import { SOFIA_SONECHKA_ANCHORS, SofiaSonechkaAnchorId } from './anchors'

export const SofiaSonechkaPage = () => {
	return (
		<CasePageTemplate
			navigation={SOFIA_SONECHKA_ANCHORS}
			header={
				<CasePageHeader texts={['Пьеса «Софья/Сонечка»', 'К. Поздеева']} imgSrc="/cases/sofia-sonechka/header.jpg" />
			}
		>
			<CaseTextBlock
				anchorId={SofiaSonechkaAnchorId.TASK}
				title="Задача"
				paragraph="Сверстать и оформить короткую пьесу (65 полос) для молодого автора. Текст — экспериментальная пьеса для чтения о взрослении, становлении и болезненном поиске собственной женственности; обо всем, с чем может столкнуться на своем пути молодая женщина. Проект малобюджетный. Нужно было сделать выразительную обложку, которая привлечёт внимание к новому имени, продумать экономичную печать, создать систему, поддерживающую структуру текста."
			/>
			<CaseMediaSet imagesSrc={['/cases/sofia-sonechka/1.jpg']} />
			<CaseTextBlock
				anchorId={SofiaSonechkaAnchorId.CONCEPT}
				title="Концепция"
				paragraph="Я предложила построить книгу вокруг образа тела как метафоры самоисследования. Обложка формируется из длинного плаката с изображением(сканом) обнажённой молодой девушки. Плакат раскрывается в полный рост, а затем складывается гармошкой и становится обложкой формата А4."
			/>
			<CaseMediaSet imagesSrc={['/cases/sofia-sonechka/2.jpg']} />
			<CaseTextBlock
				anchorId={SofiaSonechkaAnchorId.TYPOGRAPHY}
				title="Типографика и вёрстка"
				paragraph="Имена героев вынесены в колонтитулы; дневниковые фрагменты набраны курсивом; ремарки — разрядкой; в заголовках используется шрифт Vremena; основной текст и ремарки — Times. Верстка поддерживает ощущение «бардака в голове», сохраняя при этом читаемость."
			/>
			<CaseMediaSet imagesSrc={['/cases/sofia-sonechka/3.jpg', '/cases/sofia-sonechka/4.jpg']} />
			<CaseTextBlock
				anchorId={SofiaSonechkaAnchorId.OPTIMIZATION}
				title="Оптимизация бюджета"
				paragraph="Текстовый блок выполнен форматом половины листа А4. При печати листы не подрезаются — они складываются пополам и прошиваются по центру. Это позволило сократить производственные расходы. Я подготовила макет к печати и курировала процесс."
			/>
			<CaseMediaSet imagesSrc={['/cases/sofia-sonechka/5.jpg']} />
			<CaseTextBlock
				anchorId={SofiaSonechkaAnchorId.RESULT}
				title="Результат"
				paragraph="Книга издана малым тиражом. В сентябре 2024 года была приглашена на выставку «Продолжить просмотр» в галерее Галерея Artefice в Санкт-Петербурге."
			/>
			<CaseFooter title="Команда проекта" paragraph="Концепция и дизайн — Ольга Алагирова" year="2024" />
			<CaseListButtons previous={`${CASES_ROUTE}/${EGGLESTON_ROUTE}`} next={`${CASES_ROUTE}/${APLASTIC_ROUTE}`} />
		</CasePageTemplate>
	)
}

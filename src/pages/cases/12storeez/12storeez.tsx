import { CaseListButtons } from '../../../components/case-blocks/case-buttons/list-buttons'
import { CaseFooter } from '../../../components/case-blocks/case-footer/footer'
import { CaseMediaSet } from '../../../components/case-blocks/case-media-set/media-set'
import { CasePageHeader } from '../../../components/case-blocks/case-page-header/page-header'
import { CaseTextBlock } from '../../../components/case-blocks/case-text-block/text-block'
import { CasePageTemplate } from '../../../components/case-page-template/case-page-template'
import { CASES_ROUTE, SOFIA_SONECHKA_ROUTE, YANDEX_RENT_ROUTE } from '../../../router/routes'
import { TWELVE_STOREEZ_ANCHORS, TwelveStoreezAnchorId } from './anchors'

export const TwelveStoreezPage = () => {
	return (
		<CasePageTemplate
			navigation={TWELVE_STOREEZ_ANCHORS}
			header={<CasePageHeader texts={['PR-рассылка', 'и витрина 12Storeez']} imgSrc="/cases/12storeez/header.jpg" />}
		>
			<CaseTextBlock
				anchorId={TwelveStoreezAnchorId.TASK}
				title="Задача"
				paragraph="Разработать концепцию PR-рассылки с «вау» эффектом и витрины по случаю Дня Рождения — двенадцатилетия бренда 12storeez."
			/>
			<CaseMediaSet imagesSrc={['/cases/12storeez/1.jpg', '/cases/12storeez/2.jpg']} />
			<CaseTextBlock
				anchorId={TwelveStoreezAnchorId.VISUAL_METAPHOR}
				title="Визуальная метафора"
				paragraph="Эта история о пути к мастерству, длиною в 12 лет, где главной ценность является трепетном отношении к делу, любовь и внимание к клиенту. Праздничный слоёный пирог — метафора процесса, в котором каждый из 12-ти слоёв говорит о заботе. "
			/>
			<CaseMediaSet
				imagesSrc={[
					'/cases/12storeez/3.jpg',
					'/cases/12storeez/4.jpg',
					'/cases/12storeez/5.jpg',
					'/cases/12storeez/6.jpg',
				]}
			/>
			<CaseTextBlock
				anchorId={TwelveStoreezAnchorId.COMMUNICATION}
				title="Коммуникация"
				paragraph="«Эта история создавалась 12 лет — слой за слоем, не спеша, с вниманием к каждому шагу. Внутри — процесс изготовления нашего изделия: от первой мысли до момента, когда оно оказывается в ваших руках. В этом пути нет случайных деталей, только внимание и время. Мы оттачиваем мастерство с мыслью о вас — надеясь, что наше изделие станет частью вашей жизни»."
			/>
			<CaseMediaSet imagesSrc={['/cases/12storeez/7.jpg', '/cases/12storeez/8.jpg']} />
			<CaseFooter
				anchorId={TwelveStoreezAnchorId.TEAM}
				title="Команда проекта"
				paragraph="Арт-директор / дизайнер — Ольга Алагирова"
				year="2026"
			/>
			<CaseListButtons
				previous={`${CASES_ROUTE}/${SOFIA_SONECHKA_ROUTE}`}
				next={`${CASES_ROUTE}/${YANDEX_RENT_ROUTE}`}
			/>
		</CasePageTemplate>
	)
}

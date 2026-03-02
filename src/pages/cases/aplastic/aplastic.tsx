import { CaseListButtons } from '../../../components/case-blocks/case-buttons/list-buttons'
import { CaseFooter } from '../../../components/case-blocks/case-footer/footer'
import { CaseMediaSet } from '../../../components/case-blocks/case-media-set/media-set'
import { CasePageHeader } from '../../../components/case-blocks/case-page-header/page-header'
import { CaseTextBlock } from '../../../components/case-blocks/case-text-block/text-block'
import { CaseVideo } from '../../../components/case-blocks/case-video/video'
import { CaseVideoReels } from '../../../components/case-blocks/case-video/video-reels/video-reels'
import { CasePageTemplate } from '../../../components/case-page-template/case-page-template'
import { CASES_ROUTE, SBER_SELLER_ROUTE, VK_LIGHTS_ROUTE } from '../../../router/routes'
import { APLASTIC_ANCHORS, AplasticAnchorId } from './anchors'

export const AplasticPage = () => {
	return (
		<CasePageTemplate
			navigation={APLASTIC_ANCHORS}
			header={<CasePageHeader texts={['Брендинг экопроекта', 'в Абхазии']} imgSrc="/cases/aplastic/header.jpg" />}
		>
			<CaseTextBlock
				anchorId={AplasticAnchorId.TASK_SOLUTION}
				title="Задача"
				paragraph="Команда из Абхазии выиграла государственный грант на запуск производства по переработке пластиковых отходов. Проект социальный: необходимо изменить поведение людей — научить сортировать пластик и сдавать его на переработку. У команды не было бренда, позиционирования и визуального языка. Нужно было создать понятную, современную систему с акцентом на локальную культуру."
			/>
			<CaseTextBlock
				title="Решение"
				paragraph="Я построила концепцию вокруг идеи: «Сдайте нам пластик — и мы вернем его городу в новом обличии». Пластик проходит путь — от отхода к дизайнерскому объекту городской среды. Так родился нейминг на абхазском языке — название, которое переводится как «путь пластика». Я самостоятельно провела ресерч языка и собрала корректное сочетание слов."
			/>
			<CaseVideo src="/cases/aplastic/video/design-system.mp4" />
			<CaseTextBlock
				anchorId={AplasticAnchorId.VISUAL_SYSTEM}
				title="Визуальная система"
				paragraph="Пиксель — как частица переработанного пластика. Основа дизайн-системы — квадрат (модуль). Все форматы квадратные. Разработана модульная сетка. Жёлтый квадрат стал фирменным образом бренда. Типографика поддерживает абхазский язык и использует квадратные точки в знаках препинания."
			/>
			<CaseMediaSet imagesSrc={['/cases/aplastic/1.jpg']} />
			<CaseTextBlock
				anchorId={AplasticAnchorId.STRATEGY}
				title="Стратегия"
				paragraph="Фокус на вирусную оффлайн-коммуникацию. Я исследовала локальный рынок и поняла, что в маленькой Абхазии уличная реклама работает эффективнее, чем попытка конкурировать в соцсетях с российским рынком. Коммуникация на двух языках — абхазском и русском. Введение фирменной интонации: абхазские междометия «Уоу!», «Ора!», «Ааи!» в начале заголовков стали узнаваемым приемом бренда."
			/>
			<CaseMediaSet imagesSrc={['/cases/aplastic/2.jpg', '/cases/aplastic/3.jpg']} />
			<CaseTextBlock
				anchorId={AplasticAnchorId.MECHANICS}
				title="Вирусная механика"
				paragraph="Формат интерактивных городских плакатов: половина — типографическая, половина — фото объекта в природной среде Абхазии. Сам объект закрыт желтой пиксельной маской. QR-код ведет на сайт, где можно «распикселить» объект. Так офлайн трафик переводится в digital. Плакаты модульные и комбинируются между собой."
			/>
			<CaseVideo src="/cases/aplastic/video/website.mp4" />
			<CaseTextBlock
				anchorId={AplasticAnchorId.WEBSITE}
				title="Сайт"
				paragraph="Сайт построен на той же модульной системе. Интерфейс собирается из квадратов. Я спроектировала структуру, разработала визуальный язык и курировала разработчиков на этапе реализации."
			/>
			<CaseMediaSet imagesSrc={['/cases/aplastic/4.jpg', '/cases/aplastic/5.jpg', '/cases/aplastic/6.jpg']} />
			<CaseTextBlock
				anchorId={AplasticAnchorId.PHOTOSTYLE}
				title="Фото-стиль"
				paragraph="Объекты из переработанного пластика в природной среде Абхазии: зелень, море, песок. Искусственный материал возвращается в живой ландшафт."
			/>
			<CaseMediaSet imagesSrc={['/cases/aplastic/7.jpg', '/cases/aplastic/8.jpg']} />
			<CaseTextBlock
				anchorId={AplasticAnchorId.MERCH}
				title="Мерч"
				paragraph="Мерч из переработанного пластика — буквы абхазского алфавита. Из них производятся брелоки, которые можно получить за сданный килограмм пластика. Это усиливает локальную идентичность и превращает сортировку в ощутимый обмен."
			/>
			<CaseMediaSet
				imagesSrc={[
					'/cases/aplastic/9.jpg',
					'/cases/aplastic/10.jpg',
					'/cases/aplastic/11.jpg',
					'/cases/aplastic/12.jpg',
				]}
			/>
			<CaseTextBlock
				anchorId={AplasticAnchorId.RESULT_TEAM}
				title="Результат"
				paragraph="Проект реализован и работает. Благодаря вирусной офлайн-рекламе о проекте узнало более 150 человек, перешедших на сайт. Из них более 80 человек посетили выставку и открытый лекторий, посвященный переработке пластика с брендом «aplastic amҩa»."
			/>
			<CaseVideoReels src="/cases/aplastic/video/reels.mp4" />
			<CaseFooter
				title="Команда проекта"
				paragraph="Арт-директор / дизайнер — Ольга Алагирова
          Motion-дизайнер — Нина Филиппова
          Разработчик сайта — Алексей Гераськин"
				year="2025"
			/>
			<CaseListButtons previous={`${CASES_ROUTE}/${VK_LIGHTS_ROUTE}`} next={`${CASES_ROUTE}/${SBER_SELLER_ROUTE}`} />
		</CasePageTemplate>
	)
}

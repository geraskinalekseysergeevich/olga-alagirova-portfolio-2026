import { CaseListButtons } from '../../../components/case-blocks/case-buttons/list-buttons'
import { CaseFooter } from '../../../components/case-blocks/case-footer/footer'
import { CaseMediaSet } from '../../../components/case-blocks/case-media-set/media-set'
import { CasePageHeader } from '../../../components/case-blocks/case-page-header/page-header'
import { CaseTextBlock } from '../../../components/case-blocks/case-text-block/text-block'
import { CasePageTemplate } from '../../../components/case-page-template/case-page-template'
import { CASES_ROUTE, TWELVE_STOREEZ_ROUTE, VK_LIGHTS_ROUTE } from '../../../router/routes'
import { YANDEX_RENT_ANCHORS, YandexRentAnchorId } from './anchors'

export const YandexRentPage = () => {
	return (
		<CasePageTemplate
			navigation={YANDEX_RENT_ANCHORS}
			header={
				<CasePageHeader texts={['Обновление лендинга', 'Яндекс Аренды']} imgSrc={'/cases/yandex-rent/header.jpg'} />
			}
		>
			<CaseTextBlock
				anchorId={YandexRentAnchorId.TASK}
				title="Задача"
				paragraphs={[
					'У Яндекс Аренды есть много лендингов, которые визуально устарели. Кроме этого в них есть и другие проблемы: устаревшие имиджи из библиотеки, поломанная коммуникация, неоптимальная работа с точками перехода пользователя к ключевым действиям.',
					'Нужно сделать редизайн лендинга «Плюсы сдачи квартиры через Аренду», придумать и внедрить визуальные приемы, которые бы усиливали ощущение принадлежности к бренду. А также улучшить коммуникацию, логику повествования и расположение ключевых кнопок.',
				]}
			/>
			<CaseMediaSet imagesSrc={['/cases/yandex-rent/1.jpg', '/cases/yandex-rent/2.jpg', '/cases/yandex-rent/3.jpg']} />
			<CaseTextBlock
				anchorId={YandexRentAnchorId.SOLUTION}
				title="Решение"
				paragraph="Проанализировав недостатки текущего решения, не ставила задачу «просто освежить IU», а сформулировала для себя три конкретные задачи:
          - Собрать лендинг в управляемый сценарий
          - Сделать ценность сервиса  и бренд мгновенно считываемым
          - Добавить слой эмоционального дизайна без потери функции"
			/>
			<CaseMediaSet imagesSrc={['/cases/yandex-rent/4.jpg']} />
			<CaseTextBlock
				anchorId={YandexRentAnchorId.METAPHOR}
				title="Метафора"
				paragraph="Я сделала небольшой research рынка, из чего сформулировала основной запрос аудитории: пользователь не хочет «подбирать жильцов», «контролировать оплату» и тд. Он хочет избавиться от всего этого сразу. Отсюда появилась метафора: один вход → полностью закрытая задача. Сформулировала ценностное предложение: «Передаёте один ключ — получаете связку, которая решает всё за вас»."
			/>
			<CaseMediaSet imagesSrc={['/cases/yandex-rent/5.jpg', '/cases/yandex-rent/6.jpg', '/cases/yandex-rent/7.jpg']} />
			<CaseTextBlock
				anchorId={YandexRentAnchorId.KEY_SOLUTIONS}
				title="Ключевые решения"
				paragraphs={[
					'Развила визуальную графику из логотипа в реалистичный формат брелока, на который нанизаны преимущества сдачи собственности через Аренду. Усилила восприятие бренда засчет считываемой смысловой и визуальной метафоры.',
					'Пересобрала структуру лендинга в простой и понятный сценарий, где каждый следующий экран отвечает на вопрос, который возникает после предыдущего. Изменила текст на живой и эмоциональный. Разработала новый ключевой блок на странице — «Ваша связка», точечно внедрила персонализированный подход и визуально отразила метафору связки. ',
				]}
			/>
			<CaseMediaSet imagesSrc={['/cases/yandex-rent/8.jpg']} />
			<CaseTextBlock
				anchorId={YandexRentAnchorId.COMMUNICATION}
				title="Коммуникация"
				paragraph="Адаптировала прием на коммуникационный носитель — анимированный цифровой баннер."
			/>
			<CaseMediaSet imagesSrc={['/cases/yandex-rent/9.jpg']} />
			<CaseFooter
				anchorId={YandexRentAnchorId.TEAM}
				title="Команда проекта"
				paragraph="Арт-директор / дизайнер — Ольга Алагирова"
				year="2026"
			/>
			<CaseListButtons previous={`${CASES_ROUTE}/${TWELVE_STOREEZ_ROUTE}`} next={`${CASES_ROUTE}/${VK_LIGHTS_ROUTE}`} />
		</CasePageTemplate>
	)
}

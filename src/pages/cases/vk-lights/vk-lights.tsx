import { CaseListButtons } from '../../../components/case-blocks/case-buttons/list-buttons'
import { CaseFooter } from '../../../components/case-blocks/case-footer/footer'
import { CaseImageSet } from '../../../components/case-blocks/case-image-set/image-set'
import { CasePageHeader } from '../../../components/case-blocks/case-page-header/page-header'
import { CaseTextBlock } from '../../../components/case-blocks/case-text-block/text-block'
import { CasePageTemplate } from '../../../components/case-page-template/case-page-template'
import { APLASTIC_ROUTE, CASES_ROUTE, GKB_DAVYDOVSKY_ROUTE } from '../../../router/routes'
import { VK_LIGHTS_ANCHORS, VkLightsAnchorId } from './anchors'

export const VkLightsPage = () => {
	return (
		<CasePageTemplate
			navigation={VK_LIGHTS_ANCHORS}
			header={
				<CasePageHeader
					texts={['Редизайн сервиса', 'финансовой поддержки', 'авторов Вконтакте']}
					imgSrc={'/cases/vk-lights/header.jpg'}
				/>
			}
		>
			<CaseTextBlock
				anchorId={VkLightsAnchorId.TASK}
				title="Задача"
				paragraph="В рамках конкурса от VK нужно было разработать концепт ребрендинга сервиса донатов для авторов. По брифу требовалось: предложить новую айдентику, продумать интерфейс сообщества, разработать интерфейс механики покупки, предусмотреть офлайн-присутствие сервиса на фестивалях. Существующая метафора строилась на игре слов «донаты — пончики». Моей задачей было переосмыслить образ и усилить эмоциональную ценность сервиса."
			/>
			<CaseImageSet imagesSrc={['/cases/vk-lights/1.jpg']} />
			<CaseTextBlock
				anchorId={VkLightsAnchorId.PROBLEM}
				title="Проблема"
				paragraph="Чтобы увеличить активность пользователей, недостаточно упростить механику оплаты. Нужно изменить отношение к самому действию. Донат воспринимается как денежная транзакция. Я поставила цель — сместить фокус с денег на поддержку, сопричастность и веру в автора."
			/>
			<CaseTextBlock
				anchorId={VkLightsAnchorId.SOLUTION}
				title="Решение — новое позиционирвоание"
				paragraph="Я предложила отказаться от метафоры пончиков и перейти к метафоре света. Инсайт: в моменты особой поддержки зрители включают фонарики на телефонах. Зал загорается звездами. Это тише, чем аплодисменты, но глубже по смыслу. Донат — не просто перевод денег, это «включить свет» для автора."
			/>
			<CaseImageSet imagesSrc={['/cases/vk-lights/2.jpg']} />
			<CaseTextBlock
				anchorId={VkLightsAnchorId.NAMING}
				title="Нейминг и риторика"
				paragraph="VK Лайтс (поддержка = акт зажигания света).  Разработана новая риторика, вместо «задонатить» — «Зажечь свой лайтс». Язык стал эмоциональным и объединяющим."
			/>
			<CaseImageSet imagesSrc={['/cases/vk-lights/3.jpg']} />
			<CaseTextBlock
				anchorId={VkLightsAnchorId.VISUAL_SYSTEM}
				title="Визуальная система"
				paragraph="Ключевой символ — звезда как источник света. Я разработала серию простых иллюстраций, айдентику сообщества Вконтакте, адаптацию под интерфейсы покупки."
			/>
			<CaseImageSet imagesSrc={['/cases/vk-lights/4.jpg']} />
			<CaseTextBlock
				anchorId={VkLightsAnchorId.CONCEPT}
				title="Фестивальная концепция"
				paragraph="Сервис существует не только в онлайне, поэтому я разработала офлайн-носители: чехлы для телефонов с излучением света от камеры, футболки со светом в зоне сердца, брендированные фонарики и спички как символ «зажигания». Айдентика стала физическим опытом — свет можно буквально зажечь. Проект легко масштабируется в фестивали поддержки молодых авторов и открытые маркеты для молодых брендов."
			/>
			<CaseImageSet imagesSrc={['/cases/vk-lights/5.jpg']} />
			<CaseTextBlock
				anchorId={VkLightsAnchorId.RESULT_TEAM}
				title="Результат"
				paragraph="Проект сделан за один рабочий день. Он занял 1 место в конкурсе и был опубликован в сообществе VK Designers."
			/>
			<CaseImageSet imagesSrc={['/cases/vk-lights/6.jpg']} />
			<CaseFooter title="Команда проекта" paragraph="Концепция и дизайн — Ольга Алагирова" year="2025" />
			<CaseListButtons previous={`${CASES_ROUTE}/${GKB_DAVYDOVSKY_ROUTE}`} next={`${CASES_ROUTE}/${APLASTIC_ROUTE}`} />
		</CasePageTemplate>
	)
}

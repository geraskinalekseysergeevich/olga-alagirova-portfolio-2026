import { CaseListButtons } from '../../../components/case-blocks/case-buttons/list-buttons'
import { CaseFooter } from '../../../components/case-blocks/case-footer/footer'
import { CaseImageSet } from '../../../components/case-blocks/case-image-set/image-set'
import { CasePageHeader } from '../../../components/case-blocks/case-page-header/page-header'
import { CaseTextBlock } from '../../../components/case-blocks/case-text-block/text-block'
import { CasePageTemplate } from '../../../components/case-page-template/case-page-template'
import { APLASTIC_ROUTE, CASES_ROUTE, GKB_DAVYDOVSKY_ROUTE } from '../../../router/routes'
import { SBER_SELLER_ANCHORS, SberAnchorId } from './anchors'

export const SberSellerPage = () => {
	return (
		<CasePageTemplate
			navigation={SBER_SELLER_ANCHORS}
			header={
				<CasePageHeader texts={['Редизайн сейлз-хауса', 'СберСеллер']} imgSrc={'/cases/sber-seller/header.jpg'} />
			}
		>
			<CaseTextBlock
				anchorId={SberAnchorId.TASK_SOLUTION}
				title={'Задача'}
				paragraph={
					'Клиент обратился с запросом на обновление бренда. Нужно было: осовременить визуальный язык; создать метафору, напрямую связанную с ключевой компетенцией сервиса; отстроиться от других суббрендов, сохранив ДНК айдентики Сбера (3D-графика и фирменный градиент).'
				}
			/>
			<CaseTextBlock
				title={'Решение'}
				paragraph={
					'В качестве метафоры мы использовали образ тепловой карты (heatmap) — инструмента, который буквально показывает концентрацию внимания. Фирменный градиент Сбера визуально близок к стандартному градиенту тепловых карт. Мы превратили это сходство в концептуальное преимущество. На базе heatmap мы создали 3D-объект и построили визуальную систему вокруг этой формы, сохранив 3D-характер айдентики Сбера, но придав ей собственный пластический язык.​​​​​​​'
				}
			/>
			<CaseImageSet imagesSrc={['/cases/sber-seller/1.jpg', '/cases/sber-seller/2.jpg']} />
			<CaseTextBlock
				anchorId={SberAnchorId.IDEA}
				title="Идея"
				paragraph="Мы сформулировали позиционирование: «СберСеллер — всегда там, где точки внимания». Сервис помогает бизнесу находить и усиливать точки внимания целевой аудитории. Эта мысль стала основой визуальной системы."
			/>
			<CaseImageSet imagesSrc={['/cases/sber-seller/3.jpg', '/cases/sber-seller/4.jpg', '/cases/sber-seller/5.jpg']} />
			<CaseTextBlock
				anchorId={SberAnchorId.SYSTEM}
				title="Система и масштабирование"
				paragraph="Основная площадка коммуникации — презентации. Поэтому мы разработали три визуальные концепции и выбрали одну для масштабирования, построили дизайн-систему презентационных материалов, создали набор 3D-иконок в новом стиле, подготовили концепт motion-направления, внедрили ИИ-инструменты для генерации объёмных графических сцен в презентациях."
			/>
			<CaseImageSet imagesSrc={['/cases/sber-seller/6.jpg', '/cases/sber-seller/7.jpg', '/cases/sber-seller/8.jpg']} />
			<CaseImageSet
				anchorId={SberAnchorId.ICONS}
				imagesSrc={['/cases/sber-seller/9.jpg', '/cases/sber-seller/10.jpg']}
			/>
			<CaseTextBlock
				anchorId={SberAnchorId.MERCH}
				title="Мерч как продолжение идеи"
				paragraph="Я предложила решение с использованием термохромной печати: в обычном состоянии носители чёрные с логотипом, но при воздействии температуры проявляется фирменный градиент. Метафора проявления точек внимания сработала не только в коммуникации, но и в физическом объекте."
			/>
			<CaseImageSet imagesSrc={['/cases/sber-seller/11.jpg']} />
			<CaseTextBlock
				anchorId={SberAnchorId.RESULT}
				title="Результат"
				paragraph="Проект реализован и работает. Ведущее в маркетинге бизнес-СМИ Sostav.ru выпустили статью про обновление фирменного стиля СберСеллера."
			/>
			<CaseFooter
				title="Команда проекта"
				paragraph="Арт-дирекшн — Яна Дулина, Алёна Сосунова
          Дизайн — Ольга Алагирова 
          3D — Анна Васильева
          Motion — Андрей Морев"
				year="2024"
			/>
			<CaseListButtons previous={`${CASES_ROUTE}/${APLASTIC_ROUTE}`} next={`${CASES_ROUTE}/${GKB_DAVYDOVSKY_ROUTE}`} />
		</CasePageTemplate>
	)
}

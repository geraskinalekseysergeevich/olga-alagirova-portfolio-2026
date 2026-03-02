import type { AnchorConfig } from '../../../components/case-blocks/case-navigation/types'

export enum AplasticAnchorId {
	TASK_SOLUTION = 'task-solution',
	VISUAL_SYSTEM = 'visual-system',
	STRATEGY = 'strategy',
	MECHANICS = 'mechanics',
	WEBSITE = 'website',
	PHOTOSTYLE = 'photostyle',
	MERCH = 'merch',
	RESULT_TEAM = 'result-team',
}

export const APLASTIC_ANCHORS: AnchorConfig[] = [
	{ id: AplasticAnchorId.TASK_SOLUTION, text: 'Задача и решение' },
	{ id: AplasticAnchorId.VISUAL_SYSTEM, text: 'Визуальная система' },
	{ id: AplasticAnchorId.STRATEGY, text: 'Стратегия' },
	{ id: AplasticAnchorId.MECHANICS, text: 'Вирусная механика' },
	{ id: AplasticAnchorId.WEBSITE, text: 'Сайт' },
	{ id: AplasticAnchorId.PHOTOSTYLE, text: 'Фотостиль' },
	{ id: AplasticAnchorId.MERCH, text: 'Мерч' },
	{ id: AplasticAnchorId.RESULT_TEAM, text: 'Результат и команда' },
]

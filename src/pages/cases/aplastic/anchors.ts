import type { AnchorConfig } from '../../../components/case-blocks/case-navigation/types'

export enum AplasticAnchorId {
	TASK_SOLUTION = 'task-solution',
	VISUAL_SYSTEM = 'visual-system',
	OFFLINE_DIGITAL = 'offline-digital',
	MERCH = 'merch',
	RESULT = 'result',
}

export const APLASTIC_ANCHORS: AnchorConfig[] = [
	{ id: AplasticAnchorId.TASK_SOLUTION, text: 'Задача и решение' },
	{ id: AplasticAnchorId.VISUAL_SYSTEM, text: 'Визуальная система' },
	{ id: AplasticAnchorId.OFFLINE_DIGITAL, text: 'Офлайн и диджитал' },
	{ id: AplasticAnchorId.MERCH, text: 'Мерч' },
	{ id: AplasticAnchorId.RESULT, text: 'Результат' },
]

import type { AnchorConfig } from '../../../components/case-blocks/case-navigation/types'

export enum AnchorId {
	TASK_SOLUTION = 'task-solution',
	VISUAL_SYSTEM = 'visual-system',
	OFFLINE_DIGITAL = 'offline-digital',
	MERCH = 'merch',
	RESULT = 'result',
}

export const APLASTIC_ANCHORS: AnchorConfig[] = [
	{ id: AnchorId.TASK_SOLUTION, text: 'Задача и решение' },
	{ id: AnchorId.VISUAL_SYSTEM, text: 'Визуальная система' },
	{ id: AnchorId.OFFLINE_DIGITAL, text: 'Офлайн и диджитал' },
	{ id: AnchorId.MERCH, text: 'Мерч' },
	{ id: AnchorId.RESULT, text: 'Результат' },
]

import type { AnchorConfig } from '../../../components/case-blocks/case-navigation/types'

export enum SberAnchorId {
	TASK_SOLUTION = 'task-solution',
	SYSTEM = 'system',
	ICONS = 'icons',
	MERCH = 'merch',
	RESULT = 'result',
}

export const SBER_SELLER_ANCHORS: AnchorConfig[] = [
	{ id: SberAnchorId.TASK_SOLUTION, text: 'Задача и решение' },
	{ id: SberAnchorId.SYSTEM, text: 'Система и масштабирование' },
	{ id: SberAnchorId.ICONS, text: '3D-иконки' },
	{ id: SberAnchorId.MERCH, text: 'Мерч' },
	{ id: SberAnchorId.RESULT, text: 'Результат' },
]

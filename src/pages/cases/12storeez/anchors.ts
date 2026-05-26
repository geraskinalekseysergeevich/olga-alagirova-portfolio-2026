import type { AnchorConfig } from '../../../components/case-blocks/case-navigation/types'

export enum TwelveStoreezAnchorId {
	TASK = 'task',
	VISUAL_METAPHOR = 'visual-metaphor',
	COMMUNICATION = 'communication',
	TEAM = 'team',
}

export const TWELVE_STOREEZ_ANCHORS: AnchorConfig[] = [
	{ id: TwelveStoreezAnchorId.TASK, text: 'Задача' },
	{ id: TwelveStoreezAnchorId.VISUAL_METAPHOR, text: 'Визуальная метафора' },
	{ id: TwelveStoreezAnchorId.COMMUNICATION, text: 'Коммуникация' },
	{ id: TwelveStoreezAnchorId.TEAM, text: 'Команда' },
]

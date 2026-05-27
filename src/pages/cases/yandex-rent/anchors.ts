import type { AnchorConfig } from '../../../components/case-blocks/case-navigation/types'

export enum YandexRentAnchorId {
	TASK = 'task',
	SOLUTION = 'solution',
	METAPHOR = 'metaphor',
	KEY_SOLUTIONS = 'key-solutions',
	COMMUNICATION = 'communication',
	TEAM = 'team',
}

export const YANDEX_RENT_ANCHORS: AnchorConfig[] = [
	{ id: YandexRentAnchorId.TASK, text: 'Задача' },
	{ id: YandexRentAnchorId.SOLUTION, text: 'Решение' },
	{ id: YandexRentAnchorId.METAPHOR, text: 'Метафора' },
	{ id: YandexRentAnchorId.KEY_SOLUTIONS, text: 'Ключевые решения' },
	{ id: YandexRentAnchorId.COMMUNICATION, text: 'Коммуникация' },
	{ id: YandexRentAnchorId.TEAM, text: 'Команда' },
]

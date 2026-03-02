import type { AnchorConfig } from '../../../components/case-blocks/case-navigation/types'

export enum GkbDavydovskyAnchorId {
	TASK = 'task',
	SOLUTION = 'solution',
	PHOTOSTYLE = 'photostyle',
	DESIGN_SYSTEM = 'design-system',
	WEBSITE = 'website',
	PROJECT_TEAM = 'project-team',
}

export const GKB_DAVYDOVSKY_ANCHORS: AnchorConfig[] = [
	{ id: GkbDavydovskyAnchorId.TASK, text: 'Задача' },
	{ id: GkbDavydovskyAnchorId.SOLUTION, text: 'Решение' },
	{ id: GkbDavydovskyAnchorId.PHOTOSTYLE, text: 'Фотостиль' },
	{ id: GkbDavydovskyAnchorId.DESIGN_SYSTEM, text: 'Дизайн-система' },
	{ id: GkbDavydovskyAnchorId.WEBSITE, text: 'Сайт' },
	{ id: GkbDavydovskyAnchorId.PROJECT_TEAM, text: 'Команда проекта' },
]

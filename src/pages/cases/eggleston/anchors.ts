import type { AnchorConfig } from '../../../components/case-blocks/case-navigation/types'

export enum EgglestonAnchorId {
	TASK = 'task',
	CONCEPT = 'concept',
	CATALOG_STRUCTURE = 'catalog-structure',
	TYPOGRAPHY = 'typography',
	DETAILS = 'details',
	ROLE = 'role',
}

export const EGGLESTON_ANCHORS: AnchorConfig[] = [
	{ id: EgglestonAnchorId.TASK, text: 'Задача' },
	{ id: EgglestonAnchorId.CONCEPT, text: 'Концепция' },
	{ id: EgglestonAnchorId.CATALOG_STRUCTURE, text: 'Структура каталога' },
	{ id: EgglestonAnchorId.TYPOGRAPHY, text: 'Типографика' },
	{ id: EgglestonAnchorId.DETAILS, text: 'Детали' },
	{ id: EgglestonAnchorId.ROLE, text: 'Моя роль' },
]

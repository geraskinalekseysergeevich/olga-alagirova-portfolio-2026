import type { AnchorConfig } from '../../../components/case-blocks/case-navigation/types'

export enum HahnanagasAnchorId {
	TASK = 'task',
	PROCESS = 'process',
	CONCEPT = 'concept',
	LOGO_TYPOGRAPHY = 'logo-typography',
	ANIMATION = 'animation',
	RESULT = 'result',
}

export const HAHNANAGAS_ANCHORS: AnchorConfig[] = [
	{ id: HahnanagasAnchorId.TASK, text: 'Задача' },
	{ id: HahnanagasAnchorId.PROCESS, text: 'Процесс и стратегия' },
	{ id: HahnanagasAnchorId.CONCEPT, text: 'Концепция' },
	{ id: HahnanagasAnchorId.LOGO_TYPOGRAPHY, text: 'Логотип и типографика' },
	{ id: HahnanagasAnchorId.ANIMATION, text: 'Анимация' },
	{ id: HahnanagasAnchorId.RESULT, text: 'Результат и команда' },
]

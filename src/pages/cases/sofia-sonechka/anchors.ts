import type { AnchorConfig } from '../../../components/case-blocks/case-navigation/types'

export enum SofiaSonechkaAnchorId {
	TASK = 'task',
	CONCEPT = 'concept',
	TYPOGRAPHY = 'typography',
	OPTIMIZATION = 'optimization',
	RESULT = 'result',
}

export const SOFIA_SONECHKA_ANCHORS: AnchorConfig[] = [
	{ id: SofiaSonechkaAnchorId.TASK, text: 'Задача' },
	{ id: SofiaSonechkaAnchorId.CONCEPT, text: 'Концепция' },
	{ id: SofiaSonechkaAnchorId.TYPOGRAPHY, text: 'Типографика и вёрстка' },
	{ id: SofiaSonechkaAnchorId.OPTIMIZATION, text: 'Оптимизация бюджета' },
	{ id: SofiaSonechkaAnchorId.RESULT, text: 'Результат и команда' },
]

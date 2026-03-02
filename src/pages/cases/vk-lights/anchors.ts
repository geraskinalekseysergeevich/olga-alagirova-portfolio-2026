import type { AnchorConfig } from '../../../components/case-blocks/case-navigation/types'

export enum VkLightsAnchorId {
	TASK = 'task',
	PROBLEM = 'problem',
	SOLUTION = 'solution',
	NAMING = 'naming',
	VISUAL_SYSTEM = 'visual-system',
	CONCEPT = 'concept',
	RESULT_TEAM = 'result-team',
}

export const VK_LIGHTS_ANCHORS: AnchorConfig[] = [
	{ id: VkLightsAnchorId.TASK, text: 'Задача' },
	{ id: VkLightsAnchorId.PROBLEM, text: 'Проблема' },
	{ id: VkLightsAnchorId.SOLUTION, text: 'Решение' },
	{ id: VkLightsAnchorId.NAMING, text: 'Нейминг и риторика' },
	{ id: VkLightsAnchorId.VISUAL_SYSTEM, text: 'Визуальная система' },
	{ id: VkLightsAnchorId.CONCEPT, text: 'Фестивальная концепция' },
	{ id: VkLightsAnchorId.RESULT_TEAM, text: 'Результат и команда' },
]

import { CASES_ROUTE, VK_LIGHTS_ROUTE } from '../../router/routes'

export type OtherCase = {
	imageSrc: string
	caseName: string
	title: string
	paragraph: string
	link: string
}

export const OTHER_CASES: OtherCase[] = [
	{
		imageSrc: '/cases/vk-lights/preview.jpg',
		caseName: 'VK Donut',
		title: 'Редизайн сервиса донатов',
		paragraph:
			'Обновила айдентику для инструмента VK Donut, с помощью которого подписчики финансово поддерживают любимые сообщества. Проект занял первое место в конкурсе VK Designers.',
		link: `${CASES_ROUTE}/${VK_LIGHTS_ROUTE}`,
	},
	{
		imageSrc: '/cases/hahnanagas/preview.jpg',
		caseName: 'Ҳахьнанагаз',
		title: 'Айдентика travel-шоу',
		paragraph:
			'Разработала визуальную концепцию шоу, а также анимационную заставку и шаблоны для социальных сетей. Первый выпуск уже на YouTube.',
		link: '',
	},
	{
		imageSrc: '/cases/eggleston/preview.jpg',
		caseName: 'I’m at war with the obvious: William Eggleston',
		title: 'Верстка каталога выставки',
		paragraph:
			'Разработала концепцию выставки и сверстала каталог. Идея основана на разделении работ фотографа по цветовым блокам, переходящим друг в друга.',
		link: '',
	},
	{
		imageSrc: '/cases/sofia-sonechka/preview.jpg',
		caseName: '«Софья/Сонечка» К. Поздеева',
		title: 'Дизайн и верстка пьесы',
		paragraph:
			'Разработала макет, обложку и сверстала пьесу, посвященную становлению молодой женщины. Издан малый тираж. Проект был приглашен на выставку «Продолжить просмотр» в галерее Artefice.',
		link: '',
	},
]

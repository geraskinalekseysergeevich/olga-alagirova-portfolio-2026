import {
	CASES_ROUTE,
	EGGLESTON_ROUTE,
	HAHNANAGAS_ROUTE,
	SOFIA_SONECHKA_ROUTE,
	TWELVE_STOREEZ_ROUTE,
	VK_LIGHTS_ROUTE,
	YANDEX_RENT_ROUTE,
} from '../../router/routes'

export type OtherCase = {
	imageSrc: string
	caseName: string
	title: string
	paragraph: string
	link: string
}

export const OTHER_CASES: OtherCase[] = [
	{
		imageSrc: '/cases/12storeez/preview.jpg',
		caseName: '12Storeez',
		title: 'Дизайн PR-рассылки и витрины',
		paragraph:
			'Разработала концепцию и дизайн PR-рассылки и витрины с «вау» эффектом по случаю Дня Рождения — двенадцатилетия бренда 12storeez.',
		link: `${CASES_ROUTE}/${TWELVE_STOREEZ_ROUTE}`,
	},
	{
		imageSrc: '/cases/yandex-rent/preview.jpg',
		caseName: 'Яндекс Аренда',
		title: 'Редизайн лендинга',
		paragraph:
			'Обновила лендинг «Плюсы сдачи квартиры через Аренду», усиливав ощущение принадлежности к бренду. Улучшила коммуникацию и логику повествования.',
		link: `${CASES_ROUTE}/${YANDEX_RENT_ROUTE}`,
	},
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
			'Разработала визуальную концепцию шоу, а также анимационную заставку и шаблоны для социальных сетей. Первый выпуск уже на YouTube.',
		link: `${CASES_ROUTE}/${HAHNANAGAS_ROUTE}`,
	},
	{
		imageSrc: '/cases/eggleston/preview.jpg',
		caseName: 'I’m at war with the obvious: William Eggleston',
		title: 'Верстка каталога выставки',
		paragraph:
			'Разработала концепцию выставки и сверстала каталог. Идея основана на разделении работ фотографа по цветовым блокам, переходящим друг в друга.',
		link: `${CASES_ROUTE}/${EGGLESTON_ROUTE}`,
	},
	{
		imageSrc: '/cases/sofia-sonechka/preview.jpg',
		caseName: '«Софья/Сонечка» К. Поздеева',
		title: 'Дизайн и верстка пьесы',
		paragraph:
			'Разработала макет, обложку и сверстала пьесу, посвященную становлению молодой женщины. Издан малый тираж. Проект был приглашен на выставку «Продолжить просмотр» в галерее Artefice.',
		link: `${CASES_ROUTE}/${SOFIA_SONECHKA_ROUTE}`,
	},
]

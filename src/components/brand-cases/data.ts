import {
	APLASTIC_ROUTE,
	CASES_ROUTE,
	GKB_DAVYDOVSKY_ROUTE,
	SBER_SELLER_ROUTE,
	VK_LIGHTS_ROUTE,
} from '../../router/routes'

export type BrandCase = {
	imagePath: string
	caseName: string
	title: string
	paragraph: string
	link: string
}

export const BRAND_CASES: BrandCase[] = [
	{
		imagePath: '',
		caseName: 'aplastic amҩa',
		title: 'Фирменный стиль и сайт экопроекта',
		paragraph:
			'Возглавила запуск бренда по переработке пластика: разработала нейминг, стратегию продвижения, айдентику и коммуникацию, мерч, сверстала и курировала разработку сайта и приняла участие в создании сигнального образца продукта. Проект реализован и работает.',
		link: `${CASES_ROUTE}/${APLASTIC_ROUTE}`,
	},
	{
		imagePath: '',
		caseName: 'SberSeller',
		title: 'Редизайн и мерч сейлз-хауса Сбера',
		paragraph:
			'В роли старшего дизайнера разработала слоган и визуальную метафору редизайна, создала систему айдентики для презентаций и мерча, курировала разработку 3D-иконок. Проект реализован и работает.',
		link: `${CASES_ROUTE}/${SBER_SELLER_ROUTE}`,
	},
	{
		imagePath: '',
		caseName: 'ГКБ им. И.В.Давыдовского',
		title: 'Фирменный стиль и сайт больницы',
		paragraph:
			'Разработала айдентику и сайт государственной больницы в роли арт-директора. Курировала внедрение фирменного стиля во всех носителях — от печатных материалов до социальных сетей и многостраничного сайта. Проект реализован и работает.',
		link: `${CASES_ROUTE}/${GKB_DAVYDOVSKY_ROUTE}`,
	},
	{
		imagePath: '',
		caseName: 'Вконтакте',
		title: 'Редизайн сервиса финансовой поддержки авторов',
		paragraph:
			'Разработала новую айдентику и позиционирование для инструмента ВКонтакте, с помощью которого подписчики финансово поддерживают любимые сообщества. Проект сделан за один рабочий день и занял первое место в конкурсе VK Designers.',
		link: `${CASES_ROUTE}/${VK_LIGHTS_ROUTE}`,
	},
]

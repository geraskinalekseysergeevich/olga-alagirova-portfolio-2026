import { APLASTIC_ROUTE, CASES_ROUTE, GKB_DAVYDOVSKY_ROUTE, SBER_SELLER_ROUTE } from '../../router/routes'

export type BrandCase = {
	imagesSrc: string[]
	caseName: string
	title: string
	paragraph: string
	link: string
}

export const BRAND_CASES: BrandCase[] = [
	{
		imagesSrc: ['/cases/aplastic/gallery/1.jpg', '/cases/aplastic/gallery/2.jpg', '/cases/aplastic/gallery/3.jpg'],
		caseName: 'aplastic amҩa',
		title: 'Брендинг экопроекта в Абхазии',
		paragraph:
			'Возглавила запуск бренда по переработке пластика: разработала нейминг, стратегию продвижения, айдентику и коммуникацию, мерч, сверстала и курировала разработку сайта и приняла участие в создании сигнального образца продукта. Проект реализован и работает.',
		link: `${CASES_ROUTE}/${APLASTIC_ROUTE}`,
	},
	{
		imagesSrc: [
			'/cases/sber-seller/gallery/1.jpg',
			'/cases/sber-seller/gallery/2.jpg',
			'/cases/sber-seller/gallery/3.jpg',
		],
		caseName: 'SberSeller',
		title: 'Редизайн сейлз-хауса СберСеллер',
		paragraph:
			'В роли старшего дизайнера разработала слоган и визуальную метафору редизайна, создала систему айдентики для презентаций и мерча, курировала разработку 3D-иконок. Проект реализован и работает.',
		link: `${CASES_ROUTE}/${SBER_SELLER_ROUTE}`,
	},
	{
		imagesSrc: [
			'/cases/gkb-davydovsky/gallery/1.jpg',
			'/cases/gkb-davydovsky/gallery/2.jpg',
			'/cases/gkb-davydovsky/gallery/3.jpg',
		],
		caseName: 'ГКБ им. И.В.Давыдовского',
		title: 'Брендинг больницы',
		paragraph:
			'Разработала айдентику и сайт государственной больницы в роли арт-директора. Курировала внедрение фирменного стиля во всех носителях — от печатных материалов до социальных сетей и многостраничного сайта. Проект реализован и работает.',
		link: `${CASES_ROUTE}/${GKB_DAVYDOVSKY_ROUTE}`,
	},
]

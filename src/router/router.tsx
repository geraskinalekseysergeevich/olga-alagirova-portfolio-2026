import { createBrowserRouter, Navigate } from 'react-router-dom'

import { Layout } from '../components/layout/layout'
import { AplasticPage } from '../pages/cases/aplastic/aplastic'
import { GkbDavydovskyPage } from '../pages/cases/gkb-davydovsky/gkb-davydovsky'
import { SberSellerPage } from '../pages/cases/sber-seller/sber-seller'
import { VkLightsPage } from '../pages/cases/vk-lights/vk-lights'
import { CvPage } from '../pages/cv/cv'
import { MainPage } from '../pages/main/main'
import {
	APLASTIC_ROUTE,
	CASES_ROUTE,
	CV_ROUTE,
	GKB_DAVYDOVSKY_ROUTE,
	MAIN_ROUTE,
	SBER_SELLER_ROUTE,
	VK_LIGHTS_ROUTE,
} from './routes'

export const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: MAIN_ROUTE,
				element: <MainPage />,
			},
			{
				path: CV_ROUTE,
				element: <CvPage />,
			},
			{
				path: CASES_ROUTE,
				children: [
					{
						index: true,
						element: <Navigate replace to={MAIN_ROUTE} />,
					},
					{
						path: APLASTIC_ROUTE,
						element: <AplasticPage />,
					},
					{
						path: SBER_SELLER_ROUTE,
						element: <SberSellerPage />,
					},
					{
						path: GKB_DAVYDOVSKY_ROUTE,
						element: <GkbDavydovskyPage />,
					},
					{
						path: VK_LIGHTS_ROUTE,
						element: <VkLightsPage />,
					},
					{
						path: '*',
						element: <Navigate replace to={MAIN_ROUTE} />,
					},
				],
			},
			{
				path: '*',
				element: <Navigate replace to={MAIN_ROUTE} />,
			},
		],
	},
])

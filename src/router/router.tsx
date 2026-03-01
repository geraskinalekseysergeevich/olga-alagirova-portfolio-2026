import { createBrowserRouter } from 'react-router-dom'

import { Layout } from '../components/layout/layout'
import { AplasticPage } from '../pages/cases/aplastic/aplastic'
import { CvPage } from '../pages/cv/cv'
import { MainPage } from '../pages/main/main'
import { APLASTIC_ROUTE, CASES_ROUTE, CV_ROUTE, MAIN_ROUTE } from './routes'

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
						path: APLASTIC_ROUTE,
						element: <AplasticPage />,
					},
				],
			},
		],
	},
])

import { createBrowserRouter } from 'react-router-dom'

import { Layout } from '../components/layout/layout'
import { CvPage } from '../pages/cv/cv'
import { MainPage } from '../pages/main/main'
import { CV_ROUTE, MAIN_ROUTE } from './routes'

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
		],
	},
])

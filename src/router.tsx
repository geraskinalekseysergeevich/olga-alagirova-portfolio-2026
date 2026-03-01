import { createBrowserRouter } from 'react-router-dom'

import { CvPage } from './pages/cv/cv'
import { MainPage } from './pages/main/main'

export const CV_ROUTE = '/cv'
export const MAIN_ROUTE = '/'

export const router = createBrowserRouter([
	{
		path: MAIN_ROUTE,
		element: <MainPage />,
	},
	{
		path: CV_ROUTE,
		element: <CvPage />,
	},
])

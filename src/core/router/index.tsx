import { createBrowserRouter, type RouteObject } from 'react-router-dom';
// import { lazy, Suspense } from 'react';

import Admin from '../layouts/Admin';
import Home from '../../home';
import MineralTypeSearch from '../../generals/mineral-types/views/searchs';
import MineralSearch from '../../generals/minerals/views/searchs';

const routes: RouteObject[] = [
	{
		path: '/',
		element: <Admin />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/mineral-types',
				element: <MineralTypeSearch />,
			},
			{
				path: '/minerals',
				element: <MineralSearch />,
			},
		],
	},
];

export default createBrowserRouter(routes);

import { createBrowserRouter, type RouteObject } from 'react-router-dom';
// import { lazy, Suspense } from 'react';

import { PrivateOutlet, PublicOutlet } from '@/core/router/CheckPageNavigation';

import Admin from '@/core/layouts/Admin';
import Home from '@/home';
import MineralTypeSearch from '@/generals/mineral-types/views/searchs';
import MineralSearch from '@/generals/minerals/views/searchs';

// Auth
import Auth from '@/core/layouts/Auth';
import Login from '@/auth/login/views';

const routes: RouteObject[] = [
	{
		path: '/',
		element: (
			<PrivateOutlet>
				<Admin />
			</PrivateOutlet>
		),
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
	{
		path: '/login',
		element: (
			<PublicOutlet>
				<Auth />
			</PublicOutlet>
		),
		children: [
			{
				index: true,
				element: <Login />,
			},
		],
	},
];

export default createBrowserRouter(routes);

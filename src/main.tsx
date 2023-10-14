import React from 'react';
import ReactDOM from 'react-dom/client';

import '@popperjs/core';
import 'bootstrap';

import './core/styles/app.scss';

import router from './core/router';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);

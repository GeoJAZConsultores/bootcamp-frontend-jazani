import React from 'react';
import ReactDOM from 'react-dom/client';
import Admin from './core/layouts/Admin.tsx';

import '@popperjs/core';
import 'bootstrap';

import './core/styles/app.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Admin />
	</React.StrictMode>,
);

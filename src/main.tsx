import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import '@popperjs/core';
import 'bootstrap';

import './core/styles/app.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);

import axios, { type AxiosRequestConfig } from 'axios';
import { LocalStorageSession } from '../sessions';
import { type UserSecurityResponse } from '@/auth/login/domain';

const AxiosInterceptor = (): void => {
	axios.interceptors.request.use(
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-expect-error
		(config: AxiosRequestConfig) => {
			config.headers = {
				...config.headers,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			};

			const isValidAuth = LocalStorageSession.isValidAuthorization();

			console.log('Interceptor', isValidAuth);

			if (isValidAuth) {
				const user: UserSecurityResponse = LocalStorageSession.getAuthorization();
				const security = user.security;

				config.headers.Authorization = `${security.tokenType} ${security.accesTocken}`;
			}
			console.log('Interceptor');
			return config;
		},
		async error => await Promise.reject(error),
	);

	axios.interceptors.response.use(
		response => response,
		async error => await Promise.reject(error),
	);
};

export default AxiosInterceptor;

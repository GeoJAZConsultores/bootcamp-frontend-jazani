import { type ReactElement, type JSX } from 'react';
import { Navigate } from 'react-router-dom';
import { LocalStorageSession } from '@/core/sessions';

interface BaseProps {
	children: ReactElement;
}

export const PrivateOutlet = ({ children }: BaseProps): JSX.Element => {
	const isAuth = LocalStorageSession.isValidAuthorization();

	if (!isAuth) return <Navigate to="/login" replace />;

	return children;
};

export const PublicOutlet = ({ children }: BaseProps): JSX.Element => {
	const isAuth = LocalStorageSession.isValidAuthorization();

	if (isAuth) return <Navigate to="/" replace />;

	return children;
};

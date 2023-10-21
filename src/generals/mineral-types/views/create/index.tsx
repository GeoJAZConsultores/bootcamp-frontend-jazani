import { type JSX } from 'react';
import { type MineralTypeRequest } from '../../domain';
import useCreateMineralType from '../../application/hooks/useCreateMineralType';
import { useNavigate } from 'react-router-dom';
import FormSave from '../components/FormSave';

const index = (): JSX.Element => {
	// Attibutes
	const navigate = useNavigate();

	// React Query
	const { mutateAsync } = useCreateMineralType();

	// Methods
	const createMineralType = async (payload: MineralTypeRequest): Promise<void> => {
		try {
			await mutateAsync(payload);
			navigate('/mineral-types');
		} catch (error) {
			console.log('Error creare', error);
		}
	};

	return (
		<FormSave
			pageTitle="Registrar"
			onSave={payload => {
				void createMineralType(payload);
			}}
		/>
	);
};

export default index;

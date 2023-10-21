import { type JSX } from 'react';
import { type MineralTypeRequest } from '../../domain';
import FormSave from '../components/FormSave';
import { useNavigate, useParams } from 'react-router-dom';
import useEditMineralType from '../../application/hooks/useEditMineralType';

const index = (): JSX.Element => {
	// Atributtes
	const { id } = useParams();
	const navigate = useNavigate();

	// React Query
	const { mutateAsync } = useEditMineralType();

	// Methods
	const editMineralType = async (payload: MineralTypeRequest): Promise<void> => {
		try {
			await mutateAsync({ payload, id: Number(id) });
			navigate('/mineral-types');
		} catch (error) {
			console.log('Error Edit:', error);
		}
	};
	return (
		<FormSave
			id={Number(id)}
			pageTitle="Editar"
			onSave={payload => {
				void editMineralType(payload);
			}}
		/>
	);
};

export default index;

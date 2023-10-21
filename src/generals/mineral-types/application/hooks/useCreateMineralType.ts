import { useMutation, type UseMutationResult, useQueryClient } from '@tanstack/react-query';
import { type MineralTypeResponse, type MineralTypeRequest } from '../../domain';
import { MineralTypeRepository } from '../../infrastructure';
import { PAGINATED_SEARCH } from './QueryKeys';

const useCreateMineralType = (): UseMutationResult<
	MineralTypeResponse,
	Error,
	MineralTypeRequest
> => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (payload: MineralTypeRequest) => await MineralTypeRepository.create(payload),
		onError: error => {
			console.error('Error', error);
		},
		onSuccess: () => {
			void queryClient.invalidateQueries({ queryKey: [PAGINATED_SEARCH] });
		},
	});
};

export default useCreateMineralType;

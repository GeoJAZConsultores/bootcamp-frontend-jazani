import { useMutation, type UseMutationResult, useQueryClient } from '@tanstack/react-query';
import { type MineralTypeResponse } from '../../domain';
import { MineralTypeRepository } from '../../infrastructure';
import { FIND_BY_ID, PAGINATED_SEARCH } from './QueryKeys';

const useRemoveMineralType = (): UseMutationResult<MineralTypeResponse, Error, number> => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (id: number) => await MineralTypeRepository.remove(id),
		onError: error => {
			console.error('Error', error);
		},
		onSuccess: () => {
			void queryClient.invalidateQueries({ queryKey: [PAGINATED_SEARCH] });
			void queryClient.invalidateQueries({ queryKey: [FIND_BY_ID] });
		},
	});
};

export default useRemoveMineralType;

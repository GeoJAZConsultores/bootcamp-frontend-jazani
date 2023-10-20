import { type ResponsePagination, type RequestPagination } from '@/shared/domain';
import { DefinedUseQueryResult, type UseQueryResult, useQuery } from '@tanstack/react-query';
import { type MineralTypeResponse, type MineralTypeFilter } from '../../domain';
import { PAGINATED_SEARCH } from './QueryKeys';
import { MineralTypeRepository } from '../../infrastructure';

const usePaginatedSearchMineralType = (
	searchFilter: RequestPagination<MineralTypeFilter>,
): UseQueryResult<ResponsePagination<MineralTypeResponse>, Error> => {
	return useQuery({
		queryKey: [PAGINATED_SEARCH, searchFilter],
		queryFn: async () => await MineralTypeRepository.paginatedSearch(searchFilter),
		retry: 0,
		refetchOnWindowFocus: false,
	});
};

export default usePaginatedSearchMineralType;

import { useState } from 'react';
import { type MineralTypeFilter, type MineralTypeResponse } from '../../domain';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { Card } from 'react-bootstrap';
import { type RequestPagination } from '@/shared/domain';
import usePaginatedSearchMineralType from '../../application/hooks/usePaginatedSearchMineralType';
import { TableSimple } from '@/core/components/table';
import { createColumnHelper } from '@tanstack/react-table';

const index = (): JSX.Element => {
	const [mineralTypeFilter, setMineralTypeFilter] = useState<RequestPagination<MineralTypeFilter>>({
		page: 2,
		perPage: 10,
	});

	// React Query
	const { data: mineralTypePaginated, isFetching } =
		usePaginatedSearchMineralType(mineralTypeFilter);

	// React Table
	const columnHelper = createColumnHelper<MineralTypeResponse>();

	const columns = [
		columnHelper.accessor('id', {
			header: 'ID',
			cell: info => info.getValue(),
		}),
		columnHelper.accessor('name', {
			header: 'Nombre',
			cell: info => info.getValue(),
		}),
		columnHelper.accessor('description', {
			header: 'Descripcion',
			cell: info => info.getValue(),
		}),
		columnHelper.accessor('slug', {
			header: 'Slug',
			cell: info => info.getValue(),
		}),
		columnHelper.accessor('registrationDate', {
			header: 'Fech. Registro',
			cell: info => info.getValue(),
		}),
		columnHelper.accessor('state', {
			header: 'Estado',
			cell: ({ row }) => (
				<div className="text-center">
					<Badge pill bg={row.original.state ? 'success' : 'danger'}>
						{row.original.state ? 'Activo' : 'Elminado'}
					</Badge>
				</div>
			),
		}),
	];

	return (
		<>
			<Row className="pt-2">
				<Col xs={12}>
					<Card>
						<Card.Header>Listado de Tipo de Minerales</Card.Header>
						<Card.Body>
							<TableSimple<MineralTypeResponse>
								columns={columns}
								data={mineralTypePaginated?.data ?? []}
							/>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default index;

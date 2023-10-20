import { useState } from 'react';
import Table from 'react-bootstrap/Table';

import { type MineralTypeFilter, type MineralTypeResponse } from '../../domain';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { Card } from 'react-bootstrap';
import { type RequestPagination } from '@/shared/domain';
import usePaginatedSearchMineralType from '../../application/hooks/usePaginatedSearchMineralType';

const index = (): JSX.Element => {
	const [mineralTypeFilter, setMineralTypeFilter] = useState<RequestPagination<MineralTypeFilter>>({
		page: 2,
		perPage: 10,
	});

	// React Query
	const { data: mineralTypePaginated, isFetching } =
		usePaginatedSearchMineralType(mineralTypeFilter);

	return (
		<>
			<Row className="pt-2">
				<Col xs={12}>
					<Card>
						<Card.Header>Listado de Tipo de Minerales</Card.Header>
						<Card.Body>
							<Table striped bordered hover>
								<thead>
									<tr>
										<th>#</th>
										<th>Nombre</th>
										<th>Descripcion</th>
										<th>Slug</th>
										<th>Estado</th>
									</tr>
								</thead>
								<tbody>
									{mineralTypePaginated?.data?.map(mineralType => (
										<tr key={mineralType.id}>
											<td>{mineralType.id}</td>
											<td>{mineralType.name}</td>
											<td>{mineralType.description}</td>
											<td>{mineralType.slug}</td>
											<td>
												<Badge pill bg={mineralType.state ? 'success' : 'danger'}>
													{mineralType.state ? 'Activo' : 'Elminado'}
												</Badge>
											</td>
										</tr>
									))}
								</tbody>
							</Table>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default index;

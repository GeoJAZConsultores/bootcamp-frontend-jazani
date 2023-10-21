import { useState } from 'react';
import { type MineralTypeFilter, type MineralTypeResponse } from '../../domain';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { Card } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useFormik } from 'formik';
import { type FilterPage, type RequestPagination } from '@/shared/domain';
import usePaginatedSearchMineralType from '../../application/hooks/usePaginatedSearchMineralType';
import { createColumnHelper } from '@tanstack/react-table';
import TablePaginated from '@/core/components/table/TablePaginated';
import { Link } from 'react-router-dom';

const index = (): JSX.Element => {
	const [mineralTypeFilter, setMineralTypeFilter] = useState<RequestPagination<MineralTypeFilter>>({
		page: 1,
		perPage: 10,
	});

	const formik = useFormik<MineralTypeFilter>({
		initialValues: {
			name: '',
			description: '',
			slug: '',
		},
		onSubmit: values => {
			console.log('values', values);

			setMineralTypeFilter(prev => {
				return {
					...prev,
					filter: {
						name: values.name,
						description: values.description,
						slug: values.slug,
					},
				};
			});
		},
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

	// Methods
	const goToPage = (payload: FilterPage): void => {
		setMineralTypeFilter(prev => {
			return {
				...prev,
				page: payload.page,
				perPage: payload.perPage,
			};
		});
	};

	return (
		<>
			<Breadcrumb>
				<Breadcrumb.Item>General</Breadcrumb.Item>
				<Breadcrumb.Item active>Tipo de Minerales</Breadcrumb.Item>
				<li className="breadcrumb-item breadcrumb-action ms-auto">
					<Link className="btn btn-success" to="/mineral-types/create">
						Nuevo
					</Link>
				</li>
			</Breadcrumb>

			<Row>
				<Col xs={12}>
					<Card className="mb-2">
						<Card.Header>Busqueda</Card.Header>
						<Card.Body>
							<Row>
								<Col xs={12} sm={6} md={4} lg={3}>
									<Form.Group>
										<Form.Label>Nombre</Form.Label>
										<Form.Control
											type="text"
											name="name"
											value={formik.values.name}
											onChange={formik.handleChange}
										/>
									</Form.Group>
								</Col>
								<Col xs={12} sm={6} md={4} lg={3}>
									<Form.Label>Descripcion</Form.Label>
									<Form.Control
										type="text"
										name="description"
										value={formik.values.description}
										onChange={formik.handleChange}
									/>
								</Col>
								<Col xs={12} sm={6} md={4} lg={3}>
									<Form.Label>Slug</Form.Label>
									<Form.Control
										type="text"
										name="slug"
										value={formik.values.slug}
										onChange={formik.handleChange}
									/>
								</Col>
							</Row>
						</Card.Body>
						<Card.Footer className="d-flex justify-content-end">
							<Button
								type="button"
								variant="primary"
								className="me-2"
								onClick={() => {
									formik.handleSubmit();
								}}
							>
								Buscar
							</Button>
							<Button type="button" variant="secondary" onClick={formik.handleReset}>
								Limpiar
							</Button>
						</Card.Footer>
					</Card>

					<Card>
						<Card.Header>Listado de Tipo de Minerales</Card.Header>
						<Card.Body>
							<TablePaginated<MineralTypeResponse>
								columns={columns}
								data={mineralTypePaginated}
								goToPage={goToPage}
							/>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default index;

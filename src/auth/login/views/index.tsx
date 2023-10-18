import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const index = (): JSX.Element => {
	return (
		<Row className="justify-content-center align-items-center vh-100">
			<Col xs={12} sm={8} md={7} lg={6} xl={5} xxl={4}>
				<Card>
					<Card.Header>Login</Card.Header>
					<Card.Body>
						<Form className="d-grid gap-3">
							<Form.Group>
								<Form.Label>Email</Form.Label>
								<Form.Control type="email" name="email" />
							</Form.Group>
							<Form.Group>
								<Form.Label>Password</Form.Label>
								<Form.Control type="password" name="password" />
							</Form.Group>

							<hr />
							<Button type="submit" variant="primary">
								Ingresar
							</Button>
						</Form>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
};

export default index;

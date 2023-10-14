import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App = (): JSX.Element => {
	return (
		<>
			<Navbar expand="lg" className="bg-body-tertiary">
				<Container>
					<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#link">Link</Nav.Link>
							<NavDropdown title="Dropdown" id="basic-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<Container>
				<Row>
					<Col xs={12}>
						<Button variant="primary">Primary</Button>{' '}
						<Button variant="secondary">Secondary</Button>{' '}
						<Button variant="success">Success</Button> <Button variant="warning">Warning</Button>{' '}
						<Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
						<Button variant="light">Light</Button> <Button variant="dark">Dark</Button>
						<Button variant="link">Link</Button>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default App;

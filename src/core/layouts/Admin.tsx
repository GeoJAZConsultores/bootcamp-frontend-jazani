import Container from 'react-bootstrap/Container';
import Menu from './components/Menu';

const Admin = (): JSX.Element => {
	return (
		<>
			<Menu />
			<Container>
				<div>Admin</div>
			</Container>
		</>
	);
};

export default Admin;

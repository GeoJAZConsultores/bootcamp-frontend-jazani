import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Sidebar from './components/Sidebar';
import PageHeader from './components/PageHeader';

const Admin = (): JSX.Element => {
	return (
		<>
			<Sidebar />
			<div className="main">
				<PageHeader />
				<div className="content">
					<Container fluid>
						<Outlet />
					</Container>
				</div>
			</div>
		</>
	);
};

export default Admin;

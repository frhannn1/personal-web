import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../style/Nav.css';

function Navbar1() {
  return (
      <Navbar bg="dark" data-bs-theme="dark" className='sticky-top'>
        <Container className='justify-content-center'>
          <Nav defaultActiveKey="#intro">
            <Nav.Link className='menu pe-5' href="#intro">introduction</Nav.Link>
            <Nav.Link className='menu ps-2 pe-5' href="#about">About</Nav.Link>
            <Nav.Link className='menu ps-2 pe-5' href="#porto">Portofolio</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default Navbar1;
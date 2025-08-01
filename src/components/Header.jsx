import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const navbarToggleRef = useRef(null);

  const handleNavClick = (path) => {
    navigate(path);
    if(navbarToggleRef.current) {
      navbarToggleRef.current.click();
    }
  };

  return (
    <Navbar expand={false} bg="black" data-bs-theme="black">
      <Container fluid>
        <Navbar.Brand
        onClick={() => handleNavClick('/')}
        style={{cursor: 'pointer', color: 'white', marginLeft: '20px'}}>여행합니다</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" ref={navbarToggleRef} />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto flex-column text-center" style={{ maxHeight: '100px', overflowY: 'auto'}}>
            <Nav.Link onClick={() => handleNavClick('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('/introduce')}>Introduce</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('/contents')}>contents</Nav.Link>
          </Nav>
{/*          <Form className="d-flex mt-3">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
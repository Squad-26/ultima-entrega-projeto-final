import React from "react"
import { Navbar, Container, Offcanvas, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../../Acecidade.png"
import { Link } from 'react-router-dom'

function menuMobile() {

return(
  <Navbar bg="light" expand={false}>
    <Container fluid>
      <Navbar.Brand href="/">
        <img
          src={logo}
          width="60"
          height="60"
          className="d-inline-block align-top"
          alt="logo com um homem segurando muletas e ao seu redor simbolos representando os pcds  "
        />
        AceCidade
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="offcanvasNavbar" />
      <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasNavbarLabel">AceCidade</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/contatos">Contatos</Nav.Link>
            <Nav.Link as={Link} to="/locais">Locais</Nav.Link>
            <Nav.Link as={Link} to="/acessibilidade">Acessibilidade</Nav.Link>
            <Nav.Link as={Link} to="/quemSomos">Quem Somos</Nav.Link>
            <Button className='btn-menu' variant="outline-primary">Entre ou Cadastre-se</Button>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
)

}

export default menuMobile
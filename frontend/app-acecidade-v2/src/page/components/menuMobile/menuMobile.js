import React, { useContext } from "react"
import { Navbar, Container, Offcanvas, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../../Acecidade.png"
import { Link } from 'react-router-dom'
import { Btn } from '../menu/menu'
import Modal from '../modal/modal'
import { ModalContex } from "../../../providers/modal";
import { AuthContex } from "../../../providers/auth";


function MenuMobile() {
  const { user } = React.useContext(AuthContex)
  const {modalIsAtive, setModalIsAtive} = useContext(ModalContex)

  
return(
  <div>
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
              {user.isLoggedIn ? <Btn name={user.name} fotoPerfil={user.profilePic} /> : <Button
               variant="outline-danger"
                onClick={
                  () => { setModalIsAtive(true) }
                }
                
              >Entre ou Cadastre-se</Button>}

              {modalIsAtive ? <Modal onClose={() => setModalIsAtive(false)} /> : null}
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
  </div>
)

}

export default MenuMobile
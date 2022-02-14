import React, { useState } from 'react'
import { Link, useLocation, useNavigate} from 'react-router-dom'
import Modal from '../modal/modal'
import logo from "../../../Acecidade.png"
import './menu.css'
import { Box, Button, Image } from '@skynexui/components';
import Colors from '../../theme/Colors'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Navbar, Form, NavDropdown, FormControl, Nav, Offcanvas, Container } from 'react-bootstrap'


const tamanhoMinimoDeTela = 700

export default function Menu() {
  const [ModalVisivel, setModalVisivel] = useState(false)


  return(
    <NavBar setModalVisivel={setModalVisivel} ModalVisivel={ModalVisivel}/> 
  )
}


function NavBar({setModalVisivel, ModalVisivel}){
  const query = useMediaQuery(`(min-width:${tamanhoMinimoDeTela}px)`);

  return (
    <>
      <Box on
      styleSheet={{
        backgroundColor: {
          lg: 'white',
          md: 'white',
          sm: 'white',
          xl: 'white',
          xs: 'white'
        },
        'box-shadow': '0 0 5px rgba(237, 134, 0, 0.6)',
        borderBottom: ` rgba(237, 134, 0, 0.6) solid 1px`,
        display: 'flex',justifyContent: 'space-between',alignItems: 'center',
        color: Colors.Azul_Menu,
        height: '90px',
        padding: '16px 16px 16px 25px ',
      }}
        tag="header"
      >

        {query? <Pc setModalVisivel={setModalVisivel} ModalVisivel={ModalVisivel} />: <Mobilee /* setModalVisivel={setModalVisivel} ModalVisivel={ModalVisivel} */ />}
      </Box>
    </>
  )
}

function Pc({setModalVisivel, ModalVisivel}){
  const navigate = useNavigate()
      return(
        <>
          <Image className="logo" src={logo} alt="logo com um homem segurando muletas e ao seu redor simbolos representando os pcds" onClick={() => {
            navigate('/')
          }}/>
        <Box styleSheet={{
          color: Colors.Azul_Menu,
          display: 'flex',
          'justify-content': 'space-between',
        }}
          tag='div'
        >

          <Box styleSheet={{
            color: Colors.Azul_Menu,
            display: 'flex',
            'justify-content': 'space-between',
          }}
            tag="nav"
          >


            <ButtunLink nome='Home' href='/' />
            <ButtunLink nome='Contatos' href='/contatos' />
            <ButtunLink nome='Locais' href='/locais' />
            <ButtunLink nome='Acessibilidade' href='/acessibilidade' />


          </Box>
        </Box>
        <Button
          label="Entre ou Cadastre-se"
          onClick={
            () => { setModalVisivel(true) }
          }
          rounded="full"
          size="xl"
          styleSheet={{
            disabled: {},
            focus: {},
            hover: {
              'box-shadow': '0 0 5px rgba(237, 134, 0, 0.3),     0 0 15px rgba(237, 134, 0, 0.3),     0 0 25px rgba(237, 134, 0, 0.3),     0 0 45px rgba(237, 134, 0, 0.3),     0 0 25px rgba(237, 134, 0, 0.3) inset'
            }
          }}
          variant="secondary"
        />
              {ModalVisivel ? <Modal onClose={() => setModalVisivel(false)} /> : null}

        </>
      )
}



function ButtunLink({ href = '/', nome = "trocar" }) {

  const paginaAtual = useLocation()

  var styleHoverLink = 'style-link hover'
  if (paginaAtual.pathname === href) {
    styleHoverLink += ' btn-border-bottom'
  }
  return (<Link to={href}><span ><p className={styleHoverLink}>{nome}</p></span></Link>)
}


function Mobilee(){
  return(
    <Navbar bg="light" expand={false}>
  <Container fluid>
    <Navbar.Brand href="/">AceCidade</Navbar.Brand>
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
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
  )
}
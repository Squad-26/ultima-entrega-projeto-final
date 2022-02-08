import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Modal from '../modal/modal'
import logo from "../../../Acecidade.png"
import './menu.css'
import { Box, Button, Image } from '@skynexui/components';
import Colors from '../../theme/Colors'

export default function Menu() {
  const [ModalVisivel, setModalVisivel] = useState(false)

  return (
    <>
      <Box styleSheet={{
        backgroundColor: {
          lg: 'white',
          md: 'white',
          sm: 'white',
          xl: 'white',
          xs: 'white'
        },
        ' box-shadow': '0 0 5px rgba(237, 134, 0, 0.6)',
        'border-bottom': '#ed8600 solid 1px',
        'justify-content': 'space-between',
        color: Colors.Azul_Menu,
        display: 'flex',
        height: '3.75rem',
        color: 'white',
        padding: '16px',
      }}
        tag="header"
      >

        <Image src={logo} alt="logo com um homem segurando muletas e ao seu redor simbolos representando os pcds" />{/* adicionar o click pra home */}
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


                        <ButtunLink nome='Home'href='/'/>
                        <ButtunLink nome='Contatos' href='/contatos'/>
                        <ButtunLink nome='Locais' href='/locais'/>
                        <ButtunLink nome='Artigos' href='/artigos'/>


                    </Box>
                </Box>
                <Button
                  label="Entre ou Cadastre-se"
                  onClick={
                    () =>  {setModalVisivel(true)}
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

            </Box>
           {ModalVisivel ? <Modal onClose={() => setModalVisivel(false)}/> : null}
        </>
    )
}

export function ButtunLink({ href = '/', nome = "trocar" }) {

  const paginaAtual = useLocation()

  var styleHoverLink = 'style-link hover'
  if (paginaAtual.pathname === href) {
    styleHoverLink += ' btn-border-bottom'
  }
  return (<Link to={href}><span ><p className={styleHoverLink}>{nome}</p></span></Link>)
}



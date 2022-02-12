import React, { useState } from "react";
import "./modal.css"
import { Box, Button, Text, TextField } from '@skynexui/components';
import FacebookLoginComponent from '../facebookLogin/facebooklogin.component'
import GoogleLoginComponent from "../googleLogin/googlelogin.component";

export default function Modal({ id = 'modal', onClose = () => { }, children }) {
  const clickFora = (e) => {
    if (e.target.id === id) onClose()
  }

  const [titulo, setTitulo] = useState('Acesse ou Cadastre-se')

  const [login, setLogin] = useState(false)
  const [conteudoDefault, setConteudoDefault] = useState(true)
  const [cadastro, setCadastro] = useState(false)


  return (
    <Box
      id={id} onClick={clickFora} /* adicionar a logica que quando o modal esta ativo a pagina não tem rolagem */
      styleSheet={{
        width: '100%',
        height: '105vh',
        top: '0px',
        left: '0px',
        backgroundColor: 'rgba(0,0,0, .80)',
        display: 'flex',
        aligItems: ' center',
        justifyContent: 'center',
        position: 'absolute',
        top: '0px',
        'z-index': 10,
        overflow: 'hidden'
      }
      }>
      <Box styleSheet={{
        'background-color': 'rgb(74, 66, 187)',
        color: 'white',

        maxHeight: '25rem',
        maxWidth: '27rem',
        'border-radius': '10px',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        padding: '16px'
      }}>
        <Box
          styleSheet={{
            justifyContent: 'space-between',
            display: 'flex',
          }}
        >
          <Text
            tag="label"
            variant="body1"
            styleSheet={{
              fontFamily: 'ROBOTO',

            }}
          >
            {titulo}
          </Text>
          <button className='fechar' onClick={onClose} />
        </Box>
        {login ? <Login setTitulo={setTitulo} setLogin={setLogin} setConteudoDefault={setConteudoDefault} setCadastro={setCadastro} /> : null}
        {conteudoDefault ? <ConteudoDefault setTitulo={setTitulo} setLogin={setLogin} setConteudoDefault={setConteudoDefault} setCadastro={setCadastro} /> : null}
        {cadastro ? <Cadastro setTitulo={setTitulo} setLogin={setLogin} setConteudoDefault={setConteudoDefault} setCadastro={setCadastro} /> : null}
      </Box>
    </Box>
  )
}



function Cadastro(props) {
  let setLogin = props.setLogin
  let setConteudoDefault = props.setConteudoDefault
  let setCadastro = props.setCadastro
  props.setTitulo('Cadastro')
  return (
    <>
      <TextField
        label="Nome"
        type="text"
        styleSheet={{ width: '90%' }}
        textFieldColors={{
          neutral: {
            textColor: `white `,
            mainColor: 'white',
            mainColorHighlight: 'orange',
            backgroundColor: 'black',
          },
        }}
      />
      <TextField
        label="E-mail"
        type="email"
        styleSheet={{ width: '90%' }}
        textFieldColors={{
          neutral: {
            textColor: 'white',
            mainColor: 'white',
            mainColorHighlight: 'orange',
            backgroundColor: 'black',
          },
        }}
      />
      <TextField
        label="Senha"
        type="password"
        styleSheet={{ width: '90%' }}

        textFieldColors={{
          neutral: {
            textColor: 'white',
            mainColor: 'white',
            mainColorHighlight: 'orange',
            backgroundColor: 'black',
          },
        }}
      />
      <TextField

        label="Confirmar Senha"
        type="password"
        styleSheet={{ width: '90%' }}

        textFieldColors={{
          neutral: {
            textColor: 'white',
            mainColor: 'white',
            mainColorHighlight: 'orange',
            backgroundColor: 'black',
          },
        }}
      />
      <Button
        onClick={() => {
          setConteudoDefault(true)
          setLogin(false)
          setCadastro(false)
        }}
        type='submit'
        label='Cadastrar'
        fullWidth
        styleSheet={{
          height: '3rem',
          'font-size': '3rem',
          fontFamily: 'ROBOTO',
          backgroundColor: 'orange',
          color: 'white',
        }}
        buttonColors={{
          neutral: {
            textColor: 'black',
            mainColor: 'orange',
            mainColorHighlight: 'orange',
            backgroundColor: 'orange',
          },
        }}

      />
    </>
  )
}

function Login(props) {
  let setLogin = props.setLogin
  let setConteudoDefault = props.setConteudoDefault
  let setCadastro = props.setCadastro
  props.setTitulo('Login')
  return (
    <Box
      styleSheet={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', marginBottom: '32px',
        margin: 'auto',
        color: 'white',
      }}
    >
      <Box
        as="form"
        onSubmit={(infos) => {
          console.log('test')
          infos.preventDefault()
        }}

      >
        <TextField
          fullWidth
          label="E-mail"
          textFieldColors={{
            neutral: {
              textColor: 'white',
              mainColor: 'white',
              mainColorHighlight: 'orange',
              backgroundColor: 'black',
            },
          }}
        />
        <TextField
          fullWidth
          label="Senha"
          type="password"
          textFieldColors={{
            neutral: {
              textColor: 'white',
              mainColor: 'white',
              mainColorHighlight: 'orange',
              backgroundColor: 'black',
            },
          }}
        />
        <Button
          type='submit'
          label='Entrar'
          fullWidth
          styleSheet={{
            marginTop: '1rem',
            height: '3rem',
            'font-size': '3rem',
            fontFamily: 'ROBOTO',
            backgroundColor: 'orange',
            color: 'white',
          }}
          buttonColors={{
            neutral: {
              textColor: 'black',
              mainColor: 'orange',
              mainColorHighlight: 'orange',
              backgroundColor: 'orange',
            },
          }}
        />
      </Box>
      <Button
        onClick={() => {
          setCadastro(true)
          setConteudoDefault(false)
          setLogin(false)
        }}
        type='submit'
        label='Cadastrar'
        fullWidth
        styleSheet={{
          height: '3rem',
          'font-size': '3rem',
          fontFamily: 'ROBOTO',
          backgroundColor: 'orange',
          color: 'white',
        }}
        buttonColors={{
          neutral: {
            textColor: 'black',
            mainColor: 'orange',
            mainColorHighlight: 'orange',
            backgroundColor: 'orange',
          },
        }}

      />
    </Box>
  )
}

function ConteudoDefault(props) {
  let setLogin = props.setLogin
  let setConteudoDefault = props.setConteudoDefault
  let setCadastro = props.setCadastro
  props.setTitulo('Acesse ou Cadastre-se')

  return (
    <>

      <Box styleSheet={{ justifyContent: 'space-between', display: 'flex' }}>

        <FacebookLoginComponent />

        <GoogleLoginComponent />
  
      </Box>
      <div className="detalhe">
        <p className="p-style">ou</p>
      </div>
      <Button
        fullWidth
        label="Acesse com e-mail"
        styleSheet={{
          height: '3rem',
          fontFamily: 'ROBOTO',
          margin: '1rem 0 1rem 0',
        }}
        onClick={() => {
          setLogin(true)
          setConteudoDefault(false)
        }}
      />
      <div className="div-membro">
        <p className="p-style">Ainda não é um membro?</p>
      </div>
      <Button
        fullWidth
        label="Cadastre-se"
        styleSheet={{
          height: '3rem',
          fontFamily: 'ROBOTO',
          margin: '1rem 0 1rem 0',
        }}
        onClick={() => {
          setCadastro(true)
          setConteudoDefault(false)
          setLogin(false)
        }}
      />
    </>
  )
}
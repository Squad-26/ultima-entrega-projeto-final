import React, { useState } from "react";
import "./modal.css"
/* import GoogleLogin from "react-google-login"; */
import { Box, Button, Text,TextField } from '@skynexui/components';

export default function Modal({ id = 'modal', onClose = () => { }, children }) {
    const clickFora = (e) => {
        if (e.target.id === id) onClose()
    }
    var titulo = 'login'

    const [login, setLogin] = useState(false)
    const [conteudoDefault, setConteudoDefault] = useState(true)
    const [cadastro, setCadastro] = useState(false)
/* 
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [profilePic, setProfilePic] = useState();
    const [idGoogle, setIdGoogle] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const sucessoGoogle = (response) => {
        console.log(response);
        const {
            profileObj: { name, email, imageUrl, googleId },
        } = response;
        setName(name);
        setEmail(email);
        setProfilePic(imageUrl);
        setIdGoogle(googleId);
        setIsLoggedIn(true);
    };

    const falhaGoogle = () => {
        alert('Erro ao fazer login com o Google!')
    };
  */
    return (
      <Box
      id={id} className="modal" onClick={clickFora} /* adicionar a logica que quando o modal esta ativo a pagina não tem rolagem */
      styleSheet={{
          background: 'rgb(0, 0, 0, 0.5)',
          color: 'white',
          height: '100%',
          padding: 'auto',
          alignItems: 'center',
          justifyContent: 'center',
      }
        }> 
        <Box className="conteiner">
                <Box
                  styleSheet={{
                    color: 'white',
                    height: 'auto',
                    padding: '1.3rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',

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
                {login? <Login setLogin={setLogin} setConteudoDefault={setConteudoDefault} setCadastro={setCadastro}/>:null}
                {conteudoDefault? <ConteudoDefault setLogin={setLogin} setConteudoDefault={setConteudoDefault} setCadastro={setCadastro}/>:null}
                {cadastro? <Cadastro setLogin={setLogin} setConteudoDefault={setConteudoDefault} setCadastro={setCadastro}/>:null}
          </Box>
      </Box>
    )
}



function Cadastro(props){
  let setLogin = props.setLogin
  let setConteudoDefault = props.setConteudoDefault
  let setCadastro = props.setCadastro
  return(
    <>
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
      onClick={() =>{
        setConteudoDefault(true)
        setLogin(false)
        setCadastro(false)
      }}
              type='submit'
              label='Cadastrar'
              fullWidth
              styleSheet={{
                marginTop:'4rem',
                height:'3rem',
                'font-size':'3rem',
                fontFamily:'ROBOTO',
                backgroundColor:'orange',
                color:'white',
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

function Login(props){
  let setLogin = props.setLogin
  let setConteudoDefault = props.setConteudoDefault
  let setCadastro = props.setCadastro

  return(
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
        onSubmit={(infos) => { console.log('test')
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
                marginTop:'1rem',
                height:'3rem',
                'font-size':'3rem',
                fontFamily:'ROBOTO',
                backgroundColor:'orange',
                color:'white',
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
                      onClick={() =>{
                        setCadastro(true)
                        setConteudoDefault(false)
                        setLogin(false)
                      }}
              type='submit'
              label='Cadastrar'
              fullWidth
              styleSheet={{
                marginTop:'4rem',
                height:'3rem',
                'font-size':'3rem',
                fontFamily:'ROBOTO',
                backgroundColor:'orange',
                color:'white',
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

function ConteudoDefault(props){
  let setLogin = props.setLogin
  let setConteudoDefault = props.setConteudoDefault
  let setCadastro = props.setCadastro

  return(
    <section>
      <div className='botoes-login'>
          <div className='botoes-redesosial'>
              <button className='btn-sosial facebook facebookBackgroud'>Facebook</button>
              {/* <GoogleLogin className='btn-sosial google googleBackgroud'
                      clientId="1064343277548-vprmt852g7lfju46nm5b4513vrq1cnlh.apps.googleusercontent.com"
                      buttonText="Google"
                      onSuccess={sucessoGoogle}
                      onFailure={falhaGoogle}
                  /> */}
          </div>
          <div className="detalhe">
              <p className="p-style">ou</p>
          </div>
          <Button
            fullWidth
            label="Acesse com e-mail"
            styleSheet={{
              height: '3rem',
              fontFamily: 'ROBOTO',
            }}
            onClick={() =>{
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
            }}
            onClick={() =>{
              setCadastro(true)
              setConteudoDefault(false)
              setLogin(false)
            }}
          />
      </div>
    </section>
  )
}
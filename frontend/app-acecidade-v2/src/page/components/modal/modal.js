import React, { useState } from "react";
import ReactDOM from 'react-dom';
import "./modal.css"
import GoogleLogin from "react-google-login";


function Modal({ id = 'modal', onClose = () => { }, children }) {
    const clickFora = (e) => {
        if (e.target.id === id) onClose()
    }

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
 
    return (
        <div id={id} className="modal" onClick={clickFora}>
            <div className="conteiner">
                <header className='header-login'>
                    <h3>Acesse ou cadastre-se</h3>
                    <button className='fechar' onClick={onClose} />
                </header>
                <section>
                    <div className='botoes-login'>
                        <div className='botoes-redesosial'>
                            <button className='btn-sosial facebook facebookBackgroud'>Facebook</button>
                            <GoogleLogin className='btn-sosial facebook facebookBackgroud'
                                    clientId="1064343277548-vprmt852g7lfju46nm5b4513vrq1cnlh.apps.googleusercontent.com"
                                    buttonText="Entrar com o Google"
                                    onSuccess={sucessoGoogle}
                                    onFailure={sucessoGoogle}
                                />
                        </div>
                        <div className="detalhe">
                            <p className="p-style">ou</p>
                        </div>
                        <button id="acessoEmail" className="btn-email">Acesse com e-mail</button>
                        <div className="div-membro">
                            <p className="p-style">Ainda não é um membro?</p>
                        </div>
                        <button className="btn-cadastro">Cadastre-se</button>
                    </div>

                    {isLoggedIn ? (
                        <div>
                            <h1>User Information</h1>
                            <img src={profilePic} alt="Profile" />
                            <p>Name: {name}</p>
                            <p>Email: {email}</p>
                            <p>id: {idGoogle}</p>
                        </div>
                    ) : (
                        ""
                    )}
                </section>
            </div>
        </div>
    )
}

export default Modal
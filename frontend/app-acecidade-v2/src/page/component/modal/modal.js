import React from "react";
import "./modal.css"


function Modal({ id = 'modal', onClose = () =>{}, children}){
    const clickFora = (e) =>{
        if(e.target.id === id) onClose()
    }

    return(
        <div id={id} className="modal"  onClick={clickFora}>
            <div className="conteiner">
                <header className='header-login'>
                    <h3>Acesse ou cadastre-se</h3>
                    <button className='fechar' onClick={onClose}/>
                </header>
                <section>
                    <div className='botoes-login'>
                        <div className='botoes-redesosial'>
                            <button className='btn-sosial facebook facebookBackgroud'>Facebook</button>
                            <button className='btn-sosial google googleBackgroud'>Google</button>
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
                </section>
            </div>
        </div>
    )
}

export default Modal
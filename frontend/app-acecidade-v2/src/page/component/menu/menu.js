import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Modal from '../modal/modal'
import logo from "../../../Acecidade.png"
import './menu.css'

export default function Menu(){
    const [ModalVisivel, setModalVisivel] = useState(false)

    return(
        <>
            <header className='he'>
                <div className='barra-top'>
                    <div className='lado-esquerdo'>
                        <img src={logo} alt="logo com um homem segurando muletas e ao seu redor simbolos representando os pcds"/>
                    <nav className='menu'>
                        <ButtunLink nome='Home'href='/'/>
                        <ButtunLink nome='Contatos' href='/contatos'/>
                        <ButtunLink nome='Locais' href='/locais'/>
                    </nav>
                    </div>
                    <div className='lado-direito'>
                        <button className='login' onClick={() => setModalVisivel(true)}><span className='style-btn'>Entre ou Cadastre-se</span></button>
                    </div>
                </div>
            </header>
           {ModalVisivel ? <Modal onClose={() => setModalVisivel(false)}/> : null}
        </>
    )
}

export function ButtunLink({href ='/', nome="trocar"}){
    const local = useLocation()
    console.log(local.pathname)
    var stylel = 'style-link hover'
    if(local.pathname === href){
        stylel += ' btn-border-bottom'
    }
    return(
        <>
             <Link to={href}><span ><p className={stylel}>{nome}</p></span></Link>
        </>
    )
}


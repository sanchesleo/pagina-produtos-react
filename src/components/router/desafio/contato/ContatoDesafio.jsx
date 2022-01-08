import React from 'react'
import Head from '../head/Head'
import styled from './ContatoDesafio.module.css'

const ContatoDesafio = () => {

    return (
        <div className={styled.contatoContainer}>
            <Head title="Contato"/>
            <img src="https://ranekapi.origamid.dev/wp-content/uploads/2019/03/camera.jpg" alt="Contato" />
            <div className={styled.contatoTexts}>
                <h1>Entre em contato.</h1>
               <ul>
                   <li>teste@teste.com</li>
                   <li>99999-9999</li>
                   <li>Rua x, 999</li>
               </ul>
            </div>
        </div>
    )
}

export default ContatoDesafio

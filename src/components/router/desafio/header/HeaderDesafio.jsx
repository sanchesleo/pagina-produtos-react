import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './HeaderDesafio.module.css'

const HeaderDesafio = () => {
    return (
        <div>
            <NavLink to="/" activeStyle={{background: "rgba(194,197,204,1)"}} className={styles.buttonStyle} end>Produto</NavLink>
            <NavLink to="contato" activeStyle={{background: "rgba(194,197,204,1)"}} className={styles.buttonStyle}>Contato</NavLink>
        </div>
    )
}

export default HeaderDesafio

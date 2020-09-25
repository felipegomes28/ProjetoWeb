import './Logo.css'
import React from 'react'
import imagem from './Logo2.png'

export default props => 
    <aside className="logo">
        <img src={imagem} alt="logo" className="img"/> 
    </aside>
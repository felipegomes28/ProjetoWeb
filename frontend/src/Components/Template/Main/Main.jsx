import './Main.css'
import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'

export default props =>
    <React.Fragment>
        <Header/>
            <main className = "content">
                <div class="form">
                    <h1>CADASTRO DE ANIMAIS</h1>
                    <span id="nome" class="span">NOME: </span>
                    <input type="text" id="input1" class="input"/> <br/>
                    <span id="raca" class="span">RAÇA: </span>
                    <input type="text" id="input2" class="input"/> <br/>
                    <input type="radio" name="gato" value="op1"/> GATO
                    <input type="radio" name="cachorro" value="op2"/> CACHORRO <br/>
                    <button id="btnCadastrar" class="button">CADASTRAR</button>
                    <Link to="/Main2">
                        <button id="btnVer" class="button">VISUALIZAR</button>
                    </Link>
                </div>
            </main>
        <Footer />
    </React.Fragment>
     
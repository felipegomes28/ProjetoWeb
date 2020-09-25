import './Main.css'
import React from 'react'
import Header from '../Header/Header'

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
                    <button id="btnVer" class="button">VISUALIZAR</button>
                </div>
            </main>
    </React.Fragment>
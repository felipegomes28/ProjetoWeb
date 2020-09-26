import './Main2.css'
import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Tabela from './Tabela'

export default props =>
    <React.Fragment>
        <Header/>
            <main className = "content">
                <div class="list">
                    <h1>ANIMAIS CADASTRADOS</h1>
                    <div class="tabela">
                        <Tabela />
                    </div>
                </div>
            </main>
        <Footer />
    </React.Fragment>
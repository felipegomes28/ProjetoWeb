import './Main2.css'

import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import Table from './Tabela'

const api = axios.create({
    baseURL: "http://localhost:3001/animais"
})



export default class Main2 extends Component {

    state = {
        animais: [],
    }

    async componentDidMount() {
        const resposta = await api.get('')

        this.setState({
            animais: resposta.data
        })
    }

    render() {
        const { animais } = this.state;

        return (
            <React.Fragment>
                <Header />
                <main className="content">
                    <div class="list">
                        <h1>ANIMAIS CADASTRADOS</h1>
                        <div className="tabela">
                            <Table animais={animais} remover={animais}/>

                        </div>
                        <Link to="/">
                            <button id="Inicio">Página Principal</button>
                        </Link>
                    </div>
                </main>
                <Footer />
            </React.Fragment>
        )
    }
}
import './Tabela.css'

import axios from 'axios'
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

const baseURL = "http://localhost:3001/animais"

const initialState = {
    animais: { id: '', name: '', raca: '', tipo: '' },
    list: []
}

export default class Tabela extends Component {
    state = {
        animais: [],
    }

    state = { ...initialState }

    componentWillMount() {
        axios(baseURL).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    load(animais) {
        this.setState({ animais })
    }

    remover(animais) {
        axios.delete(`${baseURL}/${animais.id}`).then(resp => {
            const list = this.state.list.filter(a => a !== animais)
            this.setState({ list })
        })
    }
    atualizar(){

    }
    render() {
        return (
            <table className="Tabela" align="center" width="200">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                        <th>RAÇA</th>
                        <th>TIPO</th>
                        <th>AÇÕES</th>
                    </tr>
                </thead>
                <tbody>
                    {this.Rows()}
                </tbody>
            </table>
        )
    }
    Rows() {
        return this.state.list.map(animais => {
            const keys = Object.keys(animais)
            return (
                <tr key={animais.id}>
                    {
                        keys.map(key => <td key={key}>{animais[key]}</td>)
                    }
                    <Link to="/atualizar">
                        <button className="button2"
                                onClick={() => this.atualizar(animais)}>ATUALIZAR</button>
                    </Link>
                    <button className="button2"
                        onClick={() => this.remover(animais)}>EXCLUIR</button>
                </tr>
            )
        })
    }
}
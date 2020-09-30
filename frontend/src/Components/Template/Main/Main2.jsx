import './Main2.css'

import axios from 'axios'
import React, {Component } from 'react'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const api = axios.create({
    baseURL: "http://localhost:3001/animais"
})

export default class Main2 extends Component{

    state={
        animais: [],
    }

    async componentDidMount(){
        const resposta = await api.get('')

        this.setState({
            animais: resposta.data
        })
    }

    render(){
        const {animais} = this.state;
        const Table = ({animais}) => {
           return(
                <table>
                    <thead>
                        <tr>
                             <th>Nome</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Data 1</td>
                        </tr>
                    </tbody>
                </table>
            )
        }
        return(
            <React.Fragment>
            <Header/>
                <main className = "content">
                    <div class="list">
                        <h1>ANIMAIS CADASTRADOS</h1>
                        <div class="tabela">
                            {Table}
                        </div>
                    </div>
                </main>
            <Footer />
        </React.Fragment>
        )
    }
}
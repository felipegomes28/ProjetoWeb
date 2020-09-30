import './Main.css'
import React, {Component} from 'react'   
import axios from 'axios'
import {Link} from 'react-router-dom'

const baseURL = "http://localhost:3001/animais"

const initialState = {
    animais: {id: '', name: '', raca: '', tipo: ''},
    list:[]
}

export default class Main extends Component{

    state = {...initialState}
    
    save(){
        const animais = this.state.animais
        const method = animais.id ? 'put' : 'post'
        const url = animais.id ? `${baseURL}/${animais.id}` : baseURL
        axios[method](url,animais)
            .then(resp => {
                const list = this.getUpdateList(resp.data)
                this.setState({animais: initialState.animais, list})
            })
    }

    getUpdateList(animais){
        const list = this.state.list.filter(a => a.id !== animais.id)
        list.unshift(animais)
        return list
    }

    updateField(event){
        const animais = {...this.state.animais}
        animais[event.target.name] = event.target.value
        this.setState({animais})
    }

    render(){
        return(
            <main className = "content">
                <div class="form">
                    <h1>CADASTRO DE ANIMAIS</h1>
                    <span id="nome">NOME: </span>
                    <input type="text" id="input1" className="form-control"
                            name="name"
                            value={this.state.animais.name}
                            onChange={a => this.updateField(a)}
                            placeholder="Digite o nome..."/> <br/>
                    <span id="raca">RAÇA: </span>
                    <input type="text" id="input2" className="form-control"
                            name="raca"
                            value={this.state.animais.raca}
                            onChange={a => this.updateField(a)}
                            placeholder="Digite a raça..."/> <br/>
                    <input type="radio"
                            name="tipo"
                            value="Gato"
                            onChange={a => this.updateField(a)}/> GATO
                    <input type="radio"
                            name="tipo"
                            value="Cachorro"
                            onChange={a => this.updateField(a)}/> CACHORRO <br/>
                    <button id="btnCadastrar" class="button"
                            onClick={a => this.save(a)}>CADASTRAR</button>
                    <Link to="/Main2">
                        <button id="btnVer" class="button">VISUALIZAR</button>
                    </Link>
                </div>
            </main>
        )
    }

}

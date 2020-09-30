import React, { Component } from 'react'
import axios from 'axios'
import './Tabela.css'

const api = axios.create({
    baseURL: "http://localhost:3001/animais"
})

function remover({ animais }){
    api.delete(`${api.baseURL}/${animais.id}`).then(resp => {
        const list = this.state.list.filter(a => a !== animais)
        this.setState({ list })
    })
}


const Row = ({ record }) => {
    const keys = Object.keys(record)
    return (
        <tr key={record.id}>
            {
                keys.map(key => <td key={key}>{record[key]}</td>)
            }
            <button className="button2">ATUALIZAR</button>
            <button className="button2"
                onClick={() => remover(this.animais)}>EXCLUIR</button>
        </tr>
    )
}
const Table = ({ animais }) => {
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
                {animais.map(record => <Row record={record} />)}

            </tbody>
        </table>
    )
}

export default Table;
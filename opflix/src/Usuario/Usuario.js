import React from 'react';
import { Link } from "react-router-dom";

import Rodape from '../components/Rodape';
import Nav from '../components/Nav';
import Axios from 'axios';

import { parseJwt } from '../services/auth.js';

export default class Usuario extends React.Component {
    constructor() {
        super()
        this.state = {
            lista: [],
            emailUsuario: null
        }
    }

    componentDidMount() {
        this.listarUsuario();
        this.setState({ emailUsuario: parseJwt().nomeUsuario })
    }

    listarUsuario = () => {
        Axios.get('http://localhost:5000/api/lancamento', {
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('usuario-opflix') }
        })
            .then(response => {
                this.setState({ lista: response.data })
                console.log({ lista: response.data })
            })
    }

    render(){
        return (

            <div>
                <Nav/>
                <section className="container_filme">
                    <div className="filmess">
                        <h1>Lançamentos</h1>
                        <div className="container" id="conteudotabelas-lista">
                            <table id="tabela-lista">
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Duração</th>
                                        <th>Sinopse</th>
                                        <th>Tipo</th>
                                        <th>Plataforma</th>
                                        <th>Genêro</th>
                                    </tr>
                                </thead>

                                <tbody id="tabela-lancamentos-corpo">
                            {this.state.lista.map(element => {
                                return (
                                    <tr key={element.idLancamento}>
                                        <td>{element.nome}</td>
                                        <td>{element.duracaoMin}</td>
                                        <td>{element.dataLancamento}</td>
                                        <td>{element.sinopse}</td>
                                        <td>{element.idPlataforma}</td>
                                        <td>{element.idGenero}</td>
                                        <td>{element.idTipo}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <Rodape/>

            </div>
        );
    }
}
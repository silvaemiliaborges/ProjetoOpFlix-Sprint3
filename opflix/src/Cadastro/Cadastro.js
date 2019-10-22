import React from 'react';

import Rodape from '../../src/components/Rodape';
import Nav from '../../src/components/Nav';
import pipoca from '../assets/img/OPFLIX.png';
import Axios from 'axios';

export default class Cadastro extends React.Component {

    constructor(){
        super();
            this.state = {
                lista: []
            }
    }

    componentDidMount(){
        this.listarCadastros();
    }

    listarCadastros = () =>{
        Axios.get('http://localhost:5000/api/cadastro')
        .then(response => {
            this.setState({lista: response.data})
        }).catch(erro=>{
            console.log(erro);
        })
    }

    render() {
        return (
            <div>

                <Nav />
                <section>
                    <div className="container" id="conteudoPrincipal">
                        <img src={pipoca} />

                    </div>
                    <div className="container" id="conteudoPrincipal-cadastro">
                        <h2 className="conteudoPrincipal-cadastro-titulo">As melhores séries há qualquer hora e em qualquer lugar </h2>
                        <div className="container">

                            <input type="text" id="nome_completo" placeholder="nome_completo" />
                            <input type="text" id="email" placeholder="email" />
                            <input type="text" id="data_de_nascimento" placeholder="dd/MM/yyyy " />
                            <input type="password" id="senha" placeholder="password" />
                        </div>
                        <button className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro">Cadastrar</button>
                    </div>
                </section>


                <Rodape />
            </div>

        );
    }
}

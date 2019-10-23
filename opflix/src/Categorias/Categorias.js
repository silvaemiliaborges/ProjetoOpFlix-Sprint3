import React from 'react';
import { Link } from "react-router-dom";
import Axios from 'axios';

import '../assets/css/categoria.css'
import Rodape from '../../src/components/Rodape';
import Nav from '../../src/components/Nav';

export default class Lancamento extends React.Component {

    constructor() {
        super();
        this.state = {
            nome: "",
            duracao: "",
            classificacao: "",
            dataLancamento: "",
            sinopse: "",
            plataforma: "",
            genero: "",
            tipo: ""

        }
    }

    estadoNome = (event) => {
        this.setState({ nome: event.target.value })
    }

    estadoDuracao = (event) => {
        this.setState({ duracao: event.target.value })

    }

    estadoClassificacao = (event) => {
        this.setState({ classificacao: event.target.value })
        console.log(this.state.classificacao)

    }

    estadoDataLancamento = (event) => {
        this.setState({ dataLancamento: event.target.value })
        console.log(this.state.dataLancamento)

    }

    estadoSinopse = (event) => {
        this.setState({ sinopse: event.target.value })
        console.log(this.state.sinopse)

    }

    estadoPlataforma = (event) => {
        this.setState({ plataforma: event.target.value })
        console.log(this.state.plataforma)

    }

    estadoGenero = (event) => {
        this.setState({ genero: event.target.value })
        console.log(this.state.genero)

    }

    estadoTipo = (event) => {
        this.setState({ tipo: event.target.value })
        console.log(this.state.tipo)

    }

    Cadastrar = (event) => {
        event.preventDefault();

        console.log(this.state.nome)
        console.log(this.state.duracao)
        console.log(this.state.classificacao)
        console.log(this.state.dataLancamento)
        console.log(this.state.sinopse)
        console.log(this.state.plataforma)
        console.log(this.state.genero)
        console.log(this.state.tipo)

        Axios.post("http://localhost:5000/api/lancamento", {

            nome: this.state.nome,
            duracaoMin: Number(this.state.duracao),
            classificacao: this.state.classificacao,
            dataLancamento: this.state.dataLancamento,
            sinopse: this.state.sinopse,
            idPlataforma: Number(this.state.plataforma),
            idGenero: Number(this.state.categoria),
            idTipo: Number(this.state.tipo)
        }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem("usuario-opflix")
                }
            })

            .then(data =>{
                if(data.status === 200){
                    this.props.history.push('/usuario')
                }
            })


            .catch(erro => {
                console.log(erro);
            })


    }


    render() {
        return (

            <div>
                <Nav />
                <section className="container_filme">
                    <div className="filmess">
                        <h1>
                            Administrador
                        </h1>

                        <main className="container" id="conteudo-Principal">
                            <h2>Lançamento</h2>
                            <form onSubmit={this.Cadastrar}>

                                <div>
                                    <label for="user">Nome</label>

                                    <input
                                        type="text"
                                        className="className__categoria"
                                        id="input__categoria"
                                        placeholder="nome"
                                        onChange={this.estadoNome}
                                        value={this.state.nome}
                                    />
                                </div>



                                <div>
                                    <label for="user">Duração</label>
                                    <input type="time"
                                        onChange={this.estadoDuracao}
                                        value={this.state.duracao}
                                        id="appt"
                                        name="appt"
                                        min="00:40"
                                        max="05:00"
                                        required>
                                    </input>



                                </div>

                                <div>
                                    <label for="user">Sinopse</label>
                                    <input
                                        type="text"
                                        className="className__categoria"
                                        id="input__categoria"
                                        placeholder="Sinopse"
                                        onChange={this.estadoSinopse}
                                        value={this.state.sinopse}
                                    />
                                </div>

                                <div>
                                    <label for="user">Tipos</label>

                                    <select id="option__acessolivre"
                                        value={this.state.tipo}
                                        onChange={this.estadoTipo}>
                                        <option value="0">Filme</option>
                                        <option value="1">Série </option>

                                    </select>

                                </div>


                                <div>
                                    <label for="user">Plataformas</label>

                                    <select id="option__acessolivre"
                                        value={this.state.plataforma}
                                        onChange={this.estadoPlataforma}>
                                        <option value="0">Cinema</option>
                                        <option value="1">Prime Video</option>
                                        <option value="2">Netflix </option>

                                    </select>





                                </div>

                                <div>
                                    <label for="user">Generos</label>

                                    <select id="option__acessolivre"
                                        value={this.state.genero}
                                        onChange={this.estadoGenero}>
                                        <option value="0">Musical</option>
                                        <option value="1">Suspense</option>
                                        <option value="2">Drama </option>
                                        <option value="3">Animação </option>
                                        <option value="4">Aventura </option>
                                        <option value="5">Ficção ciêntifica

                                        </option>

                                    </select>
                                </div>





                                <button className="conteudo-btn">Enviar</button>
                            </form>
                            <Rodape />
                        </main>
                    </div>
                </section>

            </div>

        );
    }
}
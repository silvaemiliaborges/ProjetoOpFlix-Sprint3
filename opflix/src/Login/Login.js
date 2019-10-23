import React from 'react';

// import '../assets/css/login.css';

import Rodape from '../components/Rodape';
import Nav from '../components/Nav';
import '../assets/img/OPFLIX.png';
import '../assets/img/Design.png';
import Axios from 'axios';
import { parseJwt } from '../services/auth';

export default class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            senha: "",
            erro: ""
        }
    }

    mudarEstadoEmail = (event) => {
        this.setState({ email: event.target.value })
        console.log(this.state.email)
    }

    mudarEstadoSenha = (event) => {
        this.setState({ senha: event.target.value })
        console.log(this.state.senha)
    }

    efetuarLogin = (event) => {
        event.preventDefault();

        console.log('olá')
        Axios.post("http://localhost:5000/api/login", {
            email: this.state.email,
            senha: this.state.senha
        })

            .then(data => {
                if (data.status === 200) {
                    localStorage.setItem("usuario-opflix", data.data.token);
                    if (parseJwt().Permissao == "Administrador") {
                        this.props.history.push('/Categorias');
                    } else {
                        this.props.history.push('/usuario');
                    }


                } else {
                    console.log("Amado deu ruimm!!")
                }
            })
            .catch(erro => {
                this.setState({ erro: "Usuário ou senha incorreta" });
                console.log(erro);
            })
    }


    render() {
        return (
            <div>
                <Nav />

                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="OPFLIX.png" class="d-block w-100" alt="..."/></div>
                    
                            <div class="carousel-item">
                                <img src="..." class="d-block w-100" alt="..."/></div>
                    
                                <div class="carousel-item">
                                    <img src="Design.png" class="d-block w-100" alt="..."/> 
                                </div>
                   
                                </div>
                                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                        
                        <div>
                            <section className="container">
                                <div className="comp" id="componente.loginn">
                                    <label for="user">E-mail</label>
                                    <input type="text" id="email" onInput={this.mudarEstadoEmail} />
                                    <label for="user">Senha</label>
                                    <input type="password" id="senha" onInput={this.mudarEstadoSenha} />
                                    <div >
                                        <button className="conteudo-btn" onClick={this.efetuarLogin}>Entrar</button>
                                    </div>
                                </div>
                            </section>
                           
                        <Rodape />
                    </div>
                    </div>
                    
                    
                    );
            }
}


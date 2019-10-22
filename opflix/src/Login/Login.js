import React from 'react';

import Rodape from '../components/Rodape';
import Nav from '../components/Nav';
import tablet from '../assets/img/580b57fbd9996e24bc43bff8.png';
import Axios from 'axios';
import {parseJwt} from '../services/auth';

export default class Login extends React.Component {
    constructor(){
        super();
        this.state ={
            email: "",
            senha: "",
            erro: ""
        }
    }

    mudarEstadoEmail = (event) =>{
        this.setState( {email: event.target.value})
        console.log(this.state.email)
    }

    mudarEstadoSenha = (event) =>{
        this.setState({senha: event.target.value})
        console.log(this.state.senha)
    }

    efetuarLogin = (event) =>{
        event.preventDefault();

        console.log('olá')
        Axios.post("http://localhost:5000/api/login", {
            email: this.state.email,
            senha: this.state.senha
        })

            .then(data =>{
                if(data.status === 200){
                    localStorage.setItem("usuario-opflix", data.data.token);
                    if(parseJwt().Permissao=="Administrador"){
                        this.props.history.push('/Categorias');
                    }else{
                        this.props.history.push('/usuario');
                    }
                    

                }else{
                    console.log("Amado deu ruimm!!")
                }
            })
            .catch(erro => {
                this.setState({erro: "Usuário ou senha incorreta"});
                console.log(erro);
            })
    }


    render() {
        return (
            <div>
                <Nav/>
                <section className="container">
                    <div className="imagenns">
                        <img src={tablet}/>
                    </div>

                    <div className="comp" id="componente.loginn">
                        <input type="text" id="email" placeholder="email" onInput={this.mudarEstadoEmail}/>
                        <input type="password" id="senha" placeholder="password" onInput={this.mudarEstadoSenha}/>
                    </div>
                    <button className="conteudo-btn" onClick={this.efetuarLogin}>Entar</button>

                </section>
                <Rodape/>
            </div>
        );
}
}

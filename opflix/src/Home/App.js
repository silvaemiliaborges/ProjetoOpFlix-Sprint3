import React from 'react';
// import '../assets/css/App.css';

import { Link } from "react-router-dom";

// import '../../assets/css/App.css';

import logo from '../assets/img/Design.png';
import  login from '../assets/img/cyber-security-1915626_960_720.png';
import lancamento from '../assets/img/explosion-153710_960_720.png';
import categoria from '../assets/img/favorite-star-icon.png';
import cadastro from '../assets/img/user_add_21977.png';
import sino from '../assets/img/web_telas.png';
import game from '../assets/img/season-1.jpeg.jpg';
import supernatural from '../assets/img/superr.jpg';
import laCasaDePapel from '../assets/img/maxresdefault.jpg';
import arthizinho from '../assets/img/lançamentos-netflix-0710.jpg';
import pesquisa from '../assets/img/magnifying-glass-1976105_960_720.png';
// import {parseJwt} from '../services/auth';



function App() {
  return (
    <div className="App">
        <header className="cabecalhoNav">
        <div>
            <nav className="cabecalhoPrinci">
              <img src={login}/>
              <Link to='/login'>Login</Link>
              <img src={lancamento}/>
              <Link to='/lancamento'>Lançamentos</Link>
              <img src={categoria}/>
              <Link to='/categorias'>Categorias</Link>
              <img src={cadastro}/>
              <Link to='/cadastro'>Cadastre-se</Link>
            </nav>

            <img src={logo}/>
            </div>
        </header>

        <section className="conteudoss">
          <div>
            <img  src={sino}/>
            <h1>Assista por 30 dias grátis</h1>
          </div>
        </section>

        <main className="conteudo_cate">
          <section id="cont.cate" >
              <Link to='/categorias'>Categorias</Link>
              <div className="conteudoFotos">
                <img  src={game}/>
                <img  src={supernatural}/>
                <img  src={laCasaDePapel}/>
              </div>
          </section>

          <section id="sect.lanc">
            <Link to='/lancamentos'>Lançamentos</Link>
            <div className="fot.art">
              <img  src={arthizinho}/>
            </div>
          </section>

          <section id="loogin">
            <Link to='/login'>Login</Link>
            <div class="item"> 
            <input class="input_login" placeholder="username" type="text" name="username" id="login_email"/>
              <input class="input_login" placeholder="password" type="passaword" name="password" id="login_passoword"/>
            </div>

            <div class="item">
            {/* <Link to='/'>Entar</Link> */}
            {/* <button className="btn" onClick={this.efetuarLogin}>Entar</button>
            <button className="btnn" onClick={this.efetuarLogin}>Entar</button> */}

            </div>
            <Link to='/cadastro'>Cadastre-se</Link>
          </section>
        </main>

        <footer className="rodapePrincipal">
          <section className="rodapePrincipal">
         <input class="input_pesquisa" placeholder="pesquisar" type="text" name="pesquisar" id="login_pesquisa"/>
         <img src={pesquisa}/>
          </section>
        </footer>
      </div>
      
  );
}

export default App;

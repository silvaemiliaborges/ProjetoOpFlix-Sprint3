import React from 'react';
import '../Home/App.css';

import { Link } from "react-router-dom";

// import '../../assets/css/App.css';
import Rodape from '../components/Rodape';
import Nav from '../components/Nav';
import logo from '../assets/img/Design.png';
import sino from '../assets/img/web_telas.png';
import game from '../assets/img/season-1.jpeg.jpg';
import supernatural from '../assets/img/superr.jpg';
import laCasaDePapel from '../assets/img/moaCMoZYVifaQnNJGDr3M6rBglB.jpg';
import riverdale from '../assets/img/riverdale-2-temporada-completo-dublado-frete-barato-D_NQ_NP_934166-MLB27948589036_082018-F.jpg';
import arthizinho from '../assets/img/lançamentos-netflix-0710.jpg';

// import {parseJwt} from '../services/auth';



function App() {
  return (
    <div className="App">
      <Nav />
      <header className="cabecalhoNav">
        <div className="imagg">
          <img width="1425px" height="600px"src={logo} />
        </div>
      </header>

      <section className="conteudoss">
        <div>
          <div className="jk">
          <img  width="100px" height="100px"src={sino} />
          </div>
          <h1>Assista por 30 dias grátis</h1>
        </div>
      </section>

      <main className="conteudo_cate">
        <section id="cont" >
          <div className="uu">
          <div className="pp">
            <Link id="Link" to='/categorias'>Categorias</Link>
          </div>
          <div className="imgs" >

            <div className="oo">
              <img width="200px" height="300px" src={game} />
            </div>
            <div className="kj">
              <img width="200px" height="300px" src={riverdale} />
            </div>

            <div className="bb">
              <img width="200px" height="300px" src={laCasaDePapel} />
            </div>

            <div className="aa">
              <img width="200px" height="300px" src={supernatural} />
            </div>
            </div>
            
          </div>
        </section>

        <section id="sect">
          <Link id="Link" to='/lancamento'>Lançamentos</Link>
          <div className="fot.art">
            <img src={arthizinho} />
          </div>
        </section>

        <section id="loogin">
          <Link id="Link" to='/login'>Login</Link>
          <div class="item">
            <input class="input_login" placeholder="username" type="text" name="username" id="login_email" />
            <input class="input_login" placeholder="password" type="passaword" name="password" id="login_passoword" />
          </div>

          <div class="item">
            {/* <Link to='/'>Entar</Link> */}
            {/* <button className="btn" onClick={this.efetuarLogin}>Entar</button>
            <button className="btnn" onClick={this.efetuarLogin}>Entar</button> */}

          </div>
          <Link to='/cadastro'>Cadastre-se</Link>
        </section>
      </main>

      <Rodape />
    </div>

  );
}

export default App;

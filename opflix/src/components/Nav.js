import React from "react";
import '../assets/css/nav.css';
import { Link } from "react-router-dom";

import  login from '../assets/img/cyber-security-1915626_960_720.png';
import lancamento from '../assets/img/explosion-153710_960_720.png';
import categoria from '../assets/img/favorite-star-icon.png';
import cadastro from '../assets/img/user_add_21977.png';

function Nav(){
    return(
    <section>
        <nav className="cabecalhoPrinci">
            <div className="escrito">
              <img src={login}/>
              <Link to='/login'>Login</Link>
              <img src={lancamento}/>
              <Link to='/lancamentos'>Lançamentos</Link>
              <img src={categoria}/>
              <Link to='/categorias'>Categorias</Link>
              <img src={cadastro}/>
              <Link to='/cadastro'>Cadastre-se</Link>
              </div>
            </nav>
    </section>
    );
}

export default Nav;


import React from "react";
import '../assets/css/nav.css';
import { Link } from "react-router-dom";

import  login from '../assets/img/cyber-security-1915626_960_720.png';
import lancamento from '../assets/img/explosion-153710_960_720.png';
import categoria from '../assets/img/favorite-star-icon.png';
import logo from '../assets/img/1570566038528.png'
// import cadastro from '../assets/img/user_add_21977.png';

function Nav(){
    return(
      
      <nav className="cabecalhoPrinci">
        
      <div className="imag">
      <Link id="Link" to='/home'><img width="100px" height="50px" src={logo}/></Link>
      </div>

      <div className="imag">
      <img width="100px" height="100px" src={login}/>
      <Link id="Link" to='/login'>Login</Link>
      </div>

      <div className="k">
      <img width="100px" height="100px" src={lancamento}/>
      <Link id="Link" to='/lancamento'>Lançamentos</Link>
      </div>

      <div className="l">
      <img width="100px" height="100px" src={categoria}/>
      <Link id="Link" to='/categorias'>Categorias</Link>
      </div>

      {/* <div className="lk">
      <img width="100px" height="100px" src={cadastro}/>
      <Link to='/cadastro'>Cadastre-se</Link>
    </div> */}
    </nav>

    );
}

export default Nav;


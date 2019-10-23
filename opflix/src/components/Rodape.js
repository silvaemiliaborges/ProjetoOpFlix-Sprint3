import React from "react";

import '../assets/css/rodape.css';

import pesquisa from '../assets/img/magnifying-glass-1976105_960_720.png';
function Rodape(){
    return(
            
            <footer className="rodapePrincipal">
                <div className="rodapePrincipal">
                    <input class="input_pesquisa" placeholder="pesquisar" type="text" name="pesquisar" id="login_pesquisa"/>
                     <img width="30px" height="30px" src={pesquisa}/>
                </div>
           </footer>
           
    );
}

export default Rodape;
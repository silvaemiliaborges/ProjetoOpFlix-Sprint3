import React from "react";

import pesquisa from '../assets/img/magnifying-glass-1976105_960_720.png';
function Rodape(){
    return(
            <footer className="rodapePrincipal">
                <section className="rodapePrincipal">
                    <input class="input_pesquisa" placeholder="pesquisar" type="text" name="pesquisar" id="login_pesquisa"/>
                    <img scr={pesquisa}/>
                </section>
            </footer>
    );
}

export default Rodape;
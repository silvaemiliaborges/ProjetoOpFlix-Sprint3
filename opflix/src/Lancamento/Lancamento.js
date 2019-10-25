import React from 'react';


import Rodape from '../../src/components/Rodape';
import Nav from '../../src/components/Nav';

import game from '../assets/img/season-1.jpeg.jpg';
import supernatural from '../assets/img/superr.jpg';
import Stranger from '../assets/img/346630--stranger-things-4-temporada-nova-fo-diapo-3.jpg';
import manifest from '../assets/img/moaCMoZYVifaQnNJGDr3M6rBglB.jpg';

import cath from '../assets/img/2716822.jpg';
import bat from '../assets/img/3600678.jpg';
import '../assets/css/lancamento.css'
import male from '../assets/img/Maleficent.jpg';
import angry from '../assets/img/4080361.jpg';
import coringa from '../assets/img/2539612.jpg-c_215_290_x-f_jpg-q_x-xxyxx.jpg';
import abo from '../assets/img/hfhgf.jpg';
import ela from '../assets/img/cartaz-site2.png';
import morte from '../assets/img/0958720.jpg-c_215_290_x-f_jpg-q_x-xxyxx.jpg';
import  man from '../assets/img/filme_8121.jpg';
import peça from '../assets/img/Minha-Mae-E-Uma-Peca-2-site.jpg';
import siren from '../assets/img/Freeform_Official_Siren_Poster_2.jpg';
import riverdale from '../assets/img/riverdale-2-temporada-completo-dublado-frete-barato-D_NQ_NP_934166-MLB27948589036_082018-F.jpg';

export default class Lancamento extends React.Component {

    render() {
        return (

            <div>
                <Nav />
                <section className="container">

                    <div className="lanca">
                        <h1>
                            Lançamentos
                        </h1>


                        <div className="imagenss">

                            <h2>Séries</h2>

                            <img width="300px" height="300px" src={game} />
                            <img width="300px" height="300px" src={Stranger} />
                            <img width="300px" height="300px" src={supernatural} />
                            <img width="300px" height="300px" src={manifest} />
                            <img width="300px" height="300px" src={siren} />
                            <img width="300px" height="300px" src={cath} />
                            <img width="300px" height="300px" src={bat} />
                            <img width="300px" height="300px" src={riverdale} />
                            
                        </div>
                            
                        <div className="filminhos">
                            <h3>
                                Filmes
                            </h3>

                            <img width="300px" height="300px" src={male} />
                            <img width="300px" height="300px" src={angry} />
                            <img width="300px" height="300px" src={coringa} />
                            <img width="300px" height="300px" src={ela} />
                            <img width="300px" height="300px" src={abo} />
                            <img width="300px" height="300px" src={morte} />
                            <img width="300px" height="300px" src={man} />
                            <img width="300px" height="300px" src={peça} />


                        </div>

                    </div>

                    <Rodape />
                </section>
            </div>
        );
    }
}

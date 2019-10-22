import React from 'react';
import { Link } from "react-router-dom";

import Rodape from '../../src/components/Rodape';
import Nav from '../../src/components/Nav';

import game from '../assets/img/season-1.jpeg.jpg';
import supernatural from '../assets/img/superr.jpg';
import Stranger from '../assets/img/Stranger_Things_logo.png';
import manifest from '../assets/img/moaCMoZYVifaQnNJGDr3M6rBglB.jpg';
import nancy from '../assets/img/download.jpg';
import cath from '../assets/img/2716822.jpg';
import bat from '../assets/img/3600678.jpg';


export default class Lancamento extends React.Component {

    render(){
        return (

            <div>
                <Nav/>
                <section className="container">
                    <div className="lanca..">
                        <h1>
                            Lançamentos
                        </h1>
                        <div className="imagenss">
                            <img src={game}/>
                            <img src={Stranger}/>
                            <img src={supernatural}/>
                            <img src={manifest}/>
                            <img src={nancy}/>
                            <img src={cath}/>
                            <img src={bat}/>
                            </div>
                    </div>
                        <Link to='/Usuario'>Mais...</Link>
                    <Rodape/>
                </section>
            </div>
        );
    }
}

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import App from './Home/App';
import Categorias from './Categorias/Categorias';
import Cadastro from './Cadastro/Cadastro';
import Login from './Login/Login';
import Lancamento from './Lancamento/Lancamento';
import Usuario from './Usuario/Usuario';



import { Route, Link, BrowserRouter as Router, Switch, Redirect} from "react-router-dom";

import * as serviceWorker from './serviceWorker';
import { parseJwt } from './services/auth';


const RotaPrivada = ({component: Component}) => (
    <Route
        render={ props =>
            localStorage.getItem("usuario-opflix") !== null  && parseJwt().Permissao === "Administrador"?
            (
                <Component {...props}/>
            ) : (
                <Redirect
                    to={{pathname: "/login", state: {from: props.location}}}
                    />
            )
        }
        />
)
        
const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route exact path='/home' component={App}/>
                <Route path='/Login' component={Login}/>
                <Route path='/Lancamento' component={Lancamento}/>
                <RotaPrivada path='/Categorias'component={Categorias}/>
                <Route path='/Cadastro'component={Cadastro}/>
                <Route path='/Usuario'component={Usuario}/>
            </Switch>
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

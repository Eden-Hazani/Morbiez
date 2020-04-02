import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import './layout.css';
import { Home } from '../home/home';
import { Menu } from '../menu/menu';
import { RestMenu } from '../restMenu/restMenu';
import { Reservations } from '../reservations/reservations';



export class Layout extends Component{
    public render(){
        return(
            <div className ='layout'>
                <BrowserRouter>
                <aside>
                    <Menu/>
                </aside>
                <header>
                    <h1> - Morbeiz - </h1>
                </header>
                <main>
                    <Switch>
                        <Route path='/reservations' component={Reservations} exact/>
                        <Route path='/home' component={Home} exact/>
                        <Route path='/restMenu' component={RestMenu} exact/>
                        <Redirect from='/' to='/home' exact/>
                    </Switch> 
                </main>
                <footer>

                </footer>
                </BrowserRouter>
            </div>
        )
    }
}
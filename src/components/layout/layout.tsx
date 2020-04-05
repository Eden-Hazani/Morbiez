import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import './layout.css';
import { Home } from '../home/home';
import { Menu } from '../menu/menu';
import { RestMenu } from '../restMenu/restMenu';
import { Reservations } from '../reservations/reservations';
import { PageNotFound } from '../page_not_found/page_not_found';



export class Layout extends Component{
    public render(){
        return(
            <div className ='layout'>
                <BrowserRouter>
                <header>
                    <h1> - Morbeiz - </h1>
                </header>
                <aside>
                    <Menu/>
                </aside>
                <main>
                    <Switch>
                        <Route path='/reservations' component={Reservations} exact/>
                        <Route path='/home' component={Home} exact/>
                        <Route path='/restMenu' component={RestMenu} exact/>
                        <Redirect from='/Morbiez' to='/home' exact/>
                        <Redirect from='/' to='/home' exact/>
                        <Route component={PageNotFound}/>
                    </Switch> 
                </main>
                <footer>

                </footer>
                </BrowserRouter>
            </div>
        )
    }
}
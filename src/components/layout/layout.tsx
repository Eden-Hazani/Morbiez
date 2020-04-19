import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import './layout.css';
import { Home } from '../home/home';
import { Menu } from '../menu/menu';
import { RestMenu } from '../restMenu/restMenu';
import { Reservations } from '../reservations/reservations';
import { PageNotFound } from '../page_not_found/page_not_found';
import { TakeAway } from '../takeAway/takeAway';
import { TakeOrderMenu } from '../takeOrderMenu/takeOrderMenu';
import { OrderPayment } from '../orderPayment/orderPayment';



export class Layout extends Component{
    public render(){
        return(
            <div className ='layout'>
                <BrowserRouter>
                <header>
                <div className="neon-wrapper">
                    <span className="neon-text-perm">-</span>
                    <span className="neon-text-perm">M</span>
                    <span className="neon-text">O</span>
                    <span className="neon-text-perm">R</span>
                    <span className="neon-text-perm">B</span>
                    <span className="neon-text-perm">E</span>
                    <span className="neon-text-perm">I</span>
                    <span className="neon-text-perm">Z</span>
                    <span className="neon-text-perm">-</span>
                </div>
                </header>
                <aside>
                    <Menu/>
                </aside>
                <main>
                    <Switch>
                        <Route path='/reservations' component={Reservations} exact/>
                        <Route path='/home' component={Home} exact/>
                        <Route path='/restMenu' component={RestMenu} exact/>
                        <Route path='/takeAway' component={TakeAway} exact/>
                        <Route path='/takeOrderMenu' component={TakeOrderMenu} exact/>
                        <Route path='/orderPayment' component={OrderPayment} exact/>
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
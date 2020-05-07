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
import { ContactUs } from '../contactUs/contatsUs';

interface LayoutState{
    showFooter:boolean
}

export class Layout extends Component<any,LayoutState>{
    public constructor(props:any){
        super(props)
        this.state = {showFooter : false}
    }
    public componentDidMount(){
        setTimeout(() => {
            this.setState({showFooter:true})
        }, 2000);
    }
    public handleToUpdate = (boolean:boolean) =>{
        this.setState({showFooter:boolean})
        setTimeout(() => {
            this.setState({showFooter:true})
            // this is set on 100 mili sec becuse JAVASCRIPT can only do one thing at a time, so when the page loads after 2 secs it will jump to loading this function and that needs
            // to happen instantly
        }, 100);
    }
    public render(){
        const {showFooter} = this.state;
        return(
            <div className ='layout'>
                <BrowserRouter>
                <header style={{zIndex:1}}>
                <div className="neon-wrapper">
                    <span className="neon-text-perm">-</span>
                    <span className="neon-text-perm">M</span>
                    <span className="neon-text-perm">O</span>
                    <span className="neon-text-perm">R</span>
                    <span className="neon-text-perm">B</span>
                    <span className="neon-text-perm">E</span>
                    <span className="neon-text-perm">I</span>
                    <span className="neon-text-perm">Z</span>
                    <span className="neon-text-perm">-</span>
                </div>
                </header>
                <aside style={{zIndex:10}}>
                    <Menu/>
                </aside>
                <main style={{zIndex:1}}>
                    <Switch>
                        <Route path='/reservations' render={props => <Reservations onHandleToUpdate = {this.handleToUpdate} />} exact/>
                        {/* Pass props to child within the Route, we render the Component while also sending our props into said component */}
                        <Route path='/home'  render={props => <Home onHandleToUpdate = {this.handleToUpdate}  />} exact/>
                        <Route path='/restMenu' render={props => <RestMenu onHandleToUpdate = {this.handleToUpdate} />} exact/>
                        <Route path='/takeAway' render={props => <TakeAway onHandleToUpdate = {this.handleToUpdate} />} exact/>
                        <Route path='/takeOrderMenu' render={props => <TakeOrderMenu onHandleToUpdate = {this.handleToUpdate} />} exact/>
                        <Route path='/orderPayment' render={props => <OrderPayment onHandleToUpdate = {this.handleToUpdate} />} exact/>
                        <Redirect from='/Morbiez' to='/home' exact/>
                        <Redirect from='/' to='/home' exact/>
                        <Route component={PageNotFound}/>
                    </Switch> 
                </main>
                <footer style={{zIndex:5}}>
                   {showFooter? <ContactUs/>: <div></div>} 
                </footer>
                </BrowserRouter>
            </div>
        )
    }
}
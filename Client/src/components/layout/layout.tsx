import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import './layout.css';
import { ToppingModel } from '../../models/toppingModule';
import { SideDishModel } from '../../models/sideDishModel';
import { DrinksModel } from '../../models/drinksModel';
import { SidesModel } from '../../models/sidesModel';
import { BurgerVsToppingModel } from '../../models/burgerVsToppingModel';
import { BurgerModel } from '../../models/burgerModel';
import { Unsubscribe } from 'redux';
import { store } from '../../redux/store';
import { Home } from '../home/home';
import { Menu } from '../menu/menu';
import { RestMenu } from '../restMenu/restMenu';
import { Reservations } from '../reservations/reservations';
import { PageNotFound } from '../page_not_found/page_not_found';
import { TakeAway } from '../takeAway/takeAway';
import { TakeOrderMenu } from '../takeOrderMenu/takeOrderMenu';
import { OrderPayment } from '../orderPayment/orderPayment';
import { ContactUs } from '../contactUs/contatsUs';
import { CustomerInformation } from '../customerInformation/customerInformation';
import axios from 'axios';
import { ActionType } from '../../redux/action-type';


interface LayoutState{
    showFooter:boolean,
    burger:BurgerModel[],
    toppings:ToppingModel[],
    drinks:DrinksModel[],
    sides: SidesModel[],
    sideDish: SideDishModel[],
    burgerVsTopping: BurgerVsToppingModel[],
}

export class Layout extends Component<any,LayoutState>{
    private unsubscribeStore: Unsubscribe
    public constructor(props:any){
        super(props)
        this.state = {
            showFooter : false,
            burger: [],
            toppings: [],
            drinks:[],
            sides:[],
            sideDish: [],
            burgerVsTopping:[]
        }
        this.unsubscribeStore = store.subscribe(()=>{})
        
    }
    public componentWillUnmount(): void{
        this.unsubscribeStore() 
    }

    public handleToUpdate = (boolean:boolean) =>{
        this.setState({ showFooter: boolean})       
    }

    public componentDidMount(){
        this.getLists();
    }

    public getLists = async()=>{
        const url = 'http://localhost:3000/api/morbiez';
         try{
           const burgerResp = await axios.get<BurgerModel[]>(`${url}/burgers`);
           const toppingResp = await axios.get<ToppingModel[]>(`${url}/toppings`);
           const drinksResp = await axios.get<DrinksModel[]>(`${url}/drinks`);
           const sidesResp = await axios.get<SidesModel[]>(`${url}/sides`);
           const bVtResp = await axios.get<BurgerVsToppingModel[]>(`${url}/burgers-vs-toppings`);
           const sideDishResp = await axios.get<SideDishModel[]>(`${url}/sidedishes`);
           const burger = burgerResp.data;
           const toppings = toppingResp.data;
           const drinks = drinksResp.data;
           const sides = sidesResp.data;
           const burgerVsTopping = bVtResp.data;
           const sideDish = sideDishResp.data;
           this.setState({burger,toppings,drinks,sides,burgerVsTopping,sideDish});
           store.dispatch({type: ActionType.GetAllBurger,payload:this.state.burger})
           store.dispatch({type: ActionType.GetAllBurgerVsTopping,payload:this.state.burgerVsTopping})
           store.dispatch({type: ActionType.GetAllDrinks,payload:this.state.drinks})
           store.dispatch({type: ActionType.GetAllSideDish,payload:this.state.sideDish})
           store.dispatch({type: ActionType.GetAllSides,payload:this.state.sides})
           store.dispatch({type: ActionType.GetAllToppings,payload:this.state.toppings})
         }catch(err){
           alert(err.message)
         }
      }
   

    
    public render(){
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
                        <Route path='/customerInformation/:totalPrice' render={props => <CustomerInformation {...props} onHandleToUpdate = {this.handleToUpdate} />} exact/>
                        <Route path='/orderPayment/:orderInformation' render={(props) => <OrderPayment {...props} onHandleToUpdate = {this.handleToUpdate}/>} exact/>
                        <Redirect from='/Morbiez' to='/home' exact/>
                        <Redirect from='/' to='/home' exact/>
                        <Route component={PageNotFound}/>
                    </Switch> 
                </main>
                <footer style={{zIndex:5}}>
                   {this.state.showFooter ? <ContactUs/>: <div></div>} 
                </footer>
                </BrowserRouter>
            </div>
        )
    }
}
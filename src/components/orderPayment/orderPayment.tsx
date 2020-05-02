import React, { Component } from 'react';
import './orderPayment.css';
import { BurgerModel } from '../../models/burgerModel';
import { Unsubscribe } from 'redux';
import { store } from '../../redux/store';
import { ToppingModel } from '../../models/toppingModule';
import swal from 'sweetalert';
import { Redirect } from 'react-router-dom';


interface OrderPaymentState{
    burger:BurgerModel[],
    toppings:ToppingModel[],
    showText:boolean
}

export class OrderPayment extends Component<any,OrderPaymentState>{
    private unsubscribeStore: Unsubscribe
    public constructor(props:any){
        super(props)
        this.state ={
            toppings: store.getState().toppings,
            burger: store.getState().burger,
            showText:false
        }
        this.unsubscribeStore = store.subscribe(()=>{
            this.setState({burger: store.getState().burger, toppings: store.getState().toppings})
        })
    }
    public componentWillUnmount(): void{
        this.unsubscribeStore() 
    }
    public componentDidMount(){
        this.props.onHandleToUpdate(false)
        setTimeout(() => {
            this.setState({showText:true})
            // this function is inside the set timeout as the DIV with the id "totalPrice" is not yet constructed when the component mounts but only 2 secs afterwards
            let totalPrice = 0;
            for(let burger of this.state.burger){
                totalPrice = totalPrice + burger.price
            }
            // this condition stops the mounting function if the user reached this page without getting into the menu page first.
            if(this.state.toppings.length<1){
                return
            }
            let topping = this.state.toppings[this.state.toppings.length -1];
            Object.values(topping).forEach(function(key,index){
                if(index === 0){
                    key = 0;
                }
                totalPrice = totalPrice + (key*2)
            })
            document.getElementById("totalPrice").innerHTML = `Total + VAT : ${Math.floor(totalPrice * 1.17)} $`;
        }, 2000);
    }
    

    public render(){
        const {showText} = this.state;
        if(this.state.toppings.length<1){
            swal({title: "Can't refresh Order page Rediracting You To Home Page!",icon: 'warning'})
            return <Redirect to='/home'/>
        }
        return(
            <div className='orderPayments'>
                {showText === false && <div id='LoadingGif'></div>}
                {showText && 
                    <React.Fragment>
                       {this.state.burger.map(burger => 
                            this.state.toppings.map(topping =>
                                burger.id === topping.id &&
                                <div className='singleBurger' key={burger.id}>
                                <div className='typeOfBurger'>{burger.burgerType}</div>
                                {this.state.toppings.length>1? <div className='burgerToppings'>
                                        <hr/>
                                       {topping.Onions === 0 ||<span>Caramelized Onions {+topping.Onions * 2} $<br/></span>}
                                       {topping.Bacon === 0 || <span> Bacon Jam {+topping.Bacon * 2} $<br/></span>}
                                       {topping.Mushrooms === 0 ||<span> Mushrooms {+topping.Mushrooms * 2} $<br/></span>}
                                       {topping.Egg === 0 ||<span> Egg {+topping.Egg * 2} $<br/></span>}
                                       {topping.BlueCheese === 0 ||<span> Blue Cheese {+topping.BlueCheese * 2} $<br/></span>}
                                       {topping.ChiliPepers === 0 || <span> Chili Pepers {+topping.ChiliPepers * 2} $</span>}
                                    </div>:<div className='burgerToppings'>No Toppings</div>}
                                <div className='sidesAndDrinks'>
                                    <span>Drink - {burger.fanta || burger.sprite || burger.coke}</span>
                                    <br/>
                                    <span>Side - {burger.friedOnions || burger.mashedPotatos || burger.fries}</span>
                                </div>
                            </div>
                            ))}
                         <div id='totalPrice'>0</div>
                     </React.Fragment>
                }
            </div>
        )
    }
}
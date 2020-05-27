import React, { Component } from 'react';
import './orderPayment.css';
import { BurgerModel } from '../../models/burgerModel';
import { Unsubscribe } from 'redux';
import { store } from '../../redux/store';
import { ToppingModel } from '../../models/toppingModule';
import swal from 'sweetalert';
import { Redirect } from 'react-router-dom';
import { SideDishModel } from '../../models/sideDishModel';


interface OrderPaymentState{
    burger:BurgerModel[],
    toppings:ToppingModel[],
    sideDish:SideDishModel[],
    showText:boolean
}

export class OrderPayment extends Component<any,OrderPaymentState>{
    private unsubscribeStore: Unsubscribe
    public constructor(props:any){
        super(props)
        this.state ={
            sideDish : store.getState().sideDish,
            toppings: store.getState().toppings,
            burger: store.getState().burger,
            showText:false
        }
        this.unsubscribeStore = store.subscribe(()=>{
            this.setState({burger: store.getState().burger, toppings: store.getState().toppings, sideDish: store.getState().sideDish})
        })
    }
    public componentWillUnmount(): void{
        this.unsubscribeStore() 
        this.props.onHandleToUpdate(false)
    }
    public componentDidMount(){
        window.scrollTo(0, 0)
        setTimeout(() => {
            this.props.onHandleToUpdate(true)
            this.setState({showText:true})
        
            // this function is inside the set timeout as the DIV with the id "totalPrice" is not yet constructed when the component mounts but only 2 secs afterwards
            let totalPrice = 0;
            for(let burger of this.state.burger){
                totalPrice = totalPrice + burger.price
            }
            if(this.state.toppings.length>=1){
                let topping = this.state.toppings;
                for(let item of topping){
                    let totalTopping = 0;
                    Object.values(item).forEach(function(key,index){
                        if(index === 0){
                            key = 0;
                        }
                        totalTopping = totalTopping+key
                    })
                    totalPrice = totalPrice + totalTopping
                }
               
            }

            for(let dish of this.state.sideDish){
                totalPrice = totalPrice + dish.price
            }
            const vatPrice = totalPrice *1.17;

            document.getElementById("totalPrice").innerHTML = `Total + VAT : ${vatPrice} $`;
        }, 1000);
    }

    public getBurgerPrice = (ID:number):any =>{
        let totalPrice = 0;
        let burger = this.state.burger.filter(b=> b.id === ID)
        totalPrice = totalPrice + burger[0].price;
        if(this.state.toppings.length>=1){
            let topping = this.state.toppings.filter(t=> t.id === ID)
            Object.values(topping[0]).forEach(function(key,index){
                if(index === 0){
                    key = 0;
                }
                totalPrice = totalPrice + key
        })
        return totalPrice
    }
}
private getToppingObject =(objects)=>{
    return Object.entries(objects).map((key,index)=>{
        if(index === 0){
            key[1] = 0
        }
        return key[1] === 0 ||<span>{key[0]} {key[1]} $<br/></span>; 
    })    
}
    

    public render(){
        const {showText} = this.state;
        return(
            <div className='orderPayments'>
                {showText === false && <div id='LoadingGif'></div>}
                {showText && 
                    <React.Fragment>
                       <h3>Meals</h3>
                       {this.state.burger.length>=1? this.state.burger.map(burger => 
                            this.state.toppings.map(topping =>
                                burger.id === topping.id &&
                                <div className='singleBurger' key={burger.id}>
                                <div className='typeOfBurger'>{burger.burgerType} - {burger.price}$</div>
                                {this.state.toppings.length>=1? <div className='burgerToppings'>
                                        <hr/>
                                        <h3>Toppings:</h3>
                                        {this.getToppingObject(topping)}
                                    </div>:<div className='burgerToppings'>No Toppings</div>}
                                    <br/>
                                <div className='sidesAndDrinks'>
                                    <span>Drink - {burger.drink}</span>
                                    <br/>
                                    <span>Side - {burger.sides}</span>
                                    <hr/>
                                    <span>Price: </span>
                                    <span>{this.getBurgerPrice(burger.id)}$</span>
                                </div>
                            </div>
                            )):<div className ='sideDishesPicked'>No Meals</div>}
                            <hr/>
                            <h3>Side Dishs</h3>
                            {this.state.sideDish.length>=1? 
                            <div className ='sideDishesPicked'>
                                {this.state.sideDish.map(s =>
                                <div>{s.dishType} - {s.price}$</div>
                                )}
                            </div>
                            :<div className ='sideDishesPicked'>No Side Dishes</div>}
                         <div id='totalPrice'>0</div>
                     </React.Fragment>
                }
            </div>
        )
    }
}
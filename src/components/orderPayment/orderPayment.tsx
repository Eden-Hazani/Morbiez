import React, { Component } from 'react';
import './orderPayment.css';
import { BurgerModel } from '../../models/burgerModel';
import { Unsubscribe } from 'redux';
import { store } from '../../redux/store';

interface OrderPaymentState{
    burger:BurgerModel[],
    showText:boolean
}

export class OrderPayment extends Component<any,OrderPaymentState>{
    private unsubscribeStore: Unsubscribe
    public constructor(props:any){
        super(props)
        this.state ={
            burger: store.getState().burger,
            showText:false
        }
        this.unsubscribeStore = store.subscribe(()=>{
            this.setState({burger: store.getState().burger})
        })
    }
    public componentWillUnmount(): void{
        this.unsubscribeStore() 
    }
    public componentDidMount(){
        this.props.onHandleToUpdate(false)
        setTimeout(() => {
            this.setState({showText:true})
        }, 2000);
        let totalPrice = 0;
        for(let burger of this.state.burger){
           totalPrice = totalPrice + +burger.price + (+burger.Bacon*2) + (+burger.BlueCheese*2) + (+burger.ChiliPepers*2) + (+burger.Egg*2) + (+burger.Mushrooms*2) + (+burger.Onions*2) 
        }
        document.getElementById('totalPrice').innerHTML = `Total + VAT : ${Math.floor(totalPrice * 1.17)} $`
    }

    public render(){
        const {showText} = this.state;
        return(
            <div className='orderPayments'>
                {showText === false && <div id='LoadingGif'></div>}
                {showText && 
                    <React.Fragment>
                       {this.state.burger.map(burger => 
                         <div className='singleBurger' key={burger.id}>
                             <div className='typeOfBurger'>{burger.burgerType}</div>
                                 <div className='burgerToppings'>Toppings
                                     <hr/>
                                     <span>{burger.Onions && `Caramelized Onions ${+burger.Onions * 2} $`}<br/></span>
                                     <span>{burger.Bacon && `Bacon Jam ${+burger.Bacon * 2} $`}<br/></span>
                                     <span>{burger.Mushrooms && ` Mushrooms ${+burger.Mushrooms * 2} $`}<br/></span>
                                     <span>{burger.Egg && `Egg ${+burger.Egg * 2} $`}<br/></span>
                                     <span>{burger.BlueCheese && `Blue Cheese ${+burger.BlueCheese * 2} $`}<br/></span>
                                     <span>{burger.ChiliPepers && `Chili Pepers ${+burger.ChiliPepers * 2} $`}</span>
                                 </div>
                             <hr/>
                             <div className='sidesAndDrinks'>
                                 <span>Drink - {burger.fanta || burger.sprite || burger.coke}</span>
                                 <br/>
                                 <span>Side - {burger.friedOnions || burger.mashedPotatos || burger.fries}</span>
                             </div>
                         </div>)}
                         <div id='totalPrice'></div>
                     </React.Fragment>
                }
            </div>
        )
    }
}
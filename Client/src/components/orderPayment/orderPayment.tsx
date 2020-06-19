import React, { Component } from 'react';
import './orderPayment.css';
import { Unsubscribe } from 'redux';
import { store } from '../../redux/store';
import { ToppingModel } from '../../models/toppingModule';
import swal from 'sweetalert';
import { Redirect, Link } from 'react-router-dom';
import { NewMealModel } from '../../models/newMealModel';
import axios from 'axios';
import { NewSideDishModel } from '../../models/newSideDishModel';
import { SendOrderModel } from '../../models/sendOrderModel';
import { ActionType } from '../../redux/action-type';


interface OrderPaymentState{
    meal:NewMealModel[],
    sideDish:NewSideDishModel[],
    showText:boolean
    toppings:ToppingModel[]
    sendOrder: SendOrderModel[]
}

export class OrderPayment extends Component<any,OrderPaymentState>{
    private unsubscribeStore: Unsubscribe
    public constructor(props:any){
        super(props)
        this.state ={
            sendOrder:store.getState().sendOrder,
            toppings:store.getState().toppings,
            sideDish : store.getState().newSideDish,
            meal: store.getState().meal,
            showText:false
        }
        this.unsubscribeStore = store.subscribe(()=>{
            this.setState({meal: store.getState().meal,
                 sideDish: store.getState().newSideDish,
                 toppings:store.getState().toppings,
                 sendOrder:store.getState().sendOrder
                })
        })
    }
    public componentWillUnmount(): void{
        this.unsubscribeStore() 
        this.props.onHandleToUpdate(false)
    }
    public componentDidMount(){
        setTimeout(() => {
            this.props.onHandleToUpdate(true)
            this.setState({showText:true})
        }, 1000);
    }

    public sendOrder = async() =>{
        try{
            console.log(this.state.sendOrder)   
            const url = 'http://localhost:3000/api/morbiez';
            const response = await axios.post<SendOrderModel>(`${url}/sendOrder`,this.state.sendOrder)
            const order = response.data;
            this.resetStates();
            this.props.history.push('/home');
        }catch(err){
            alert(err.message)
        }
    }

    private resetStates = async()=>{
        store.dispatch({type:ActionType.ResetStore})

      }
    

    public render(){
        const {showText} = this.state;
        return(
            <div className='orderPayments'>
                {showText === false && <div id='LoadingGif'></div>}
                {showText && 
                    <div>
                       <h3>Meals</h3>
                        {this.state.meal.map(m=>
                        <div className='orderedItem' key={m.id}>
                            <h5>{m.burgerName}</h5>
                            <div>Base Burger Price: {m.burgerPrice}$</div>
                            <br/>
                            <h5>Toppings</h5>
                            <hr/>
                            <div>{m.pickedToppings.map(unMatchedT=>this.state.toppings.filter(t=> t.toppingId === unMatchedT.toppingId).map(pickedT=>
                                <div>
                                    <div>{pickedT.name} - Price - {pickedT.price} $</div>
                                    <div>Amount: {unMatchedT.amount}</div>
                                    <hr/>
                                </div>
                                ))}</div>
                        </div>
                            )}
                            <h3>Side Dishes</h3>
                            <br/>
                        {this.state.sideDish.map(s=>
                            <div className='orderedItem' key={s.id}>
                                <div>{s.dishType}</div>
                                <hr/>
                                <div>{s.price}</div>
                            </div>
                            )}
                         <div>{this.props.match.params.orderInformation}$</div>
                         <Link className='placeOrder' to={`/home`} onClick={this.sendOrder}>Order!</Link>
                     </div>
                }
            </div>
        )
    }
}
import React, { Component } from 'react';
import './orderPayment.css';
import { Unsubscribe } from 'redux';
import { store } from '../../redux/store';
import { ToppingModel } from '../../models/toppingModule';
import swal from 'sweetalert';
import { Redirect } from 'react-router-dom';
import { SideDishModel } from '../../models/sideDishModel';
import { NewMealModel } from '../../models/newMealModel';
import axios from 'axios';


interface OrderPaymentState{
    meal:NewMealModel[],
    sideDish:SideDishModel[],
    showText:boolean
    toppings:ToppingModel[]
}

export class OrderPayment extends Component<any,OrderPaymentState>{
    private unsubscribeStore: Unsubscribe
    public constructor(props:any){
        super(props)
        this.state ={
            toppings:[],
            sideDish : store.getState().sideDish,
            meal: store.getState().meal,
            showText:false
        }
        this.unsubscribeStore = store.subscribe(()=>{
            this.setState({meal: store.getState().meal, sideDish: store.getState().sideDish})
        })
    }
    public componentWillUnmount(): void{
        this.unsubscribeStore() 
        this.props.onHandleToUpdate(false)
    }
    public componentDidMount(){
        this.getLists();
        setTimeout(() => {
            this.props.onHandleToUpdate(true)
            this.setState({showText:true})
        }, 1000);
    }

    public getLists = async()=>{
        const url = 'http://localhost:3000/api/morbiez';
         try{
           const toppingResp = await axios.get<ToppingModel[]>(`${url}/toppings`);
           const toppings = toppingResp.data;
           this.setState({toppings});        
         }catch(err){
           alert(err.message)
         }
      }
    

    public render(){
        const {showText} = this.state;
        return(
            <div className='orderPayments'>
                {showText === false && <div id='LoadingGif'></div>}
                {showText && 
                    <React.Fragment>
                       <h3>Meals</h3>
                        {this.state.meal.map(m=>
                        <div className='meal'>
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
                         <div>{this.props.match.params.totalPrice}$</div>
                     </React.Fragment>
                }
            </div>
        )
    }
}
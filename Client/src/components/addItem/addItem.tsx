import React, { Component } from 'react';
import './addItem.css'
import { Unsubscribe } from 'redux';
import { store } from '../../redux/store';
import swal from 'sweetalert';
import { NavLink, Link } from 'react-router-dom';
import { ActionType } from '../../redux/action-type';
import { ToppingModel } from '../../models/toppingModule';
import { SideDishModel } from '../../models/sideDishModel';
import { NewMealModel } from '../../models/newMealModel';
import { NewSideDishModel } from '../../models/newSideDishModel';
import axios from 'axios';


interface AddItemState{
    burger:NewMealModel[],
    sideDish: NewSideDishModel[],
    toppings: ToppingModel[],
    deleting:boolean,
    deletingId:string,
    totalPrice:number,
    linkDisabled:boolean
}

export class AddItem extends Component<any,AddItemState>{
    private unsubscribeStore: Unsubscribe;
    public constructor(props:any){
        super(props);
        this.state = {
            linkDisabled:true,
            deletingId:null,
            totalPrice:null,
            toppings:[],
            deleting:false,
            sideDish: store.getState().sideDish,
            burger: store.getState().meal //עדכון המוצרים ישירות מהסטור

        }
        this.unsubscribeStore = store.subscribe(()=>{
            this.setState({burger: store.getState().meal, sideDish: store.getState().sideDish})
        })

    }
    public componentWillUnmount(): void{
        this.unsubscribeStore() // להפסיק להאזין לסטור כי הקומפוננט הפסיק להיות בשימוש
    }

    public componentWillMount(){
        this.getLists();
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

    public removeMeal =(ID:string)=>{ 
       this.setState({deleting:true,deletingId:ID})
        setTimeout(() => {
            store.dispatch({type: ActionType.DeleteBurger,payload:ID})
            this.setState({deleting:false,deletingId:null})
        }, 400);
    }

    public removeSide =(ID:string)=>{ 
       this.setState({deleting:true,deletingId:ID})
        setTimeout(() => {
            store.dispatch({type: ActionType.DeleteSideDish,payload:ID})
            this.setState({deleting:false,deletingId:null})
        }, 400);
    }


    public componentDidUpdate(){
        let totalPrice = 0;
        this.state.burger.map(b=>{
            b.pickedToppings.map(pickedT=>this.state.toppings.filter(t=>pickedT.toppingId === t.toppingId).map(list=> totalPrice = totalPrice + (list.price * pickedT.amount)))
        })
        this.state.burger.map(b=> totalPrice = totalPrice + b.burgerPrice)
        if(this.state.totalPrice === totalPrice){
            return
        }
            this.setState({totalPrice:totalPrice})
    }


 
    public linkEnabler = (e:any) => {
        let { linkDisabled } = this.state
        if(this.state.burger.length > 0 || this.state.sideDish.length>0){
            linkDisabled = false
        }
        if(linkDisabled){
            swal({title: "Seems Like You didn't pick a meal :(",icon:"warning"})
            e.preventDefault()
        } 
    }

    
    public render(){
        return(
            <div className='addItem'>
                <h1>Items On Order</h1>
                <div className='dishBar'>
                    {this.state.burger.map(b=>
                        <div className={`dish ${this.state.deleting && this.state.deletingId === b.id?'deleting':''}`} key={b.id}>
                            <h3>{b.burgerName}</h3>
                            {b.pickedToppings.map(t=>(this.state.toppings.filter(picked=>picked.toppingId === t.toppingId)
                                .map(order=>{return<div key={order.toppingId}>{order.name} - Amount - {t.amount}</div>})))}   
                            <hr/>
                            <div>{b.pickedSides}</div>
                            <div>{b.pickedDrink}</div>
                            <hr/>
                            <button onClick={()=>this.removeMeal(b.id)}>Delete</button>
                        </div>
                        )}
                    {this.state.sideDish.map(s=>
                       <div className={`dish ${this.state.deleting && this.state.deletingId === s.id?'deleting':''}`} key={s.id}>
                            <div>{s.dishType}</div>
                            <br/>
                            <div>{s.price}$</div>
                            <hr/>
                            <button onClick={()=>this.removeSide(s.id)}>Delete</button>
                        </div>
                        )}
                </div>
                <br/>
                <div>Total Price: {this.state.totalPrice}$</div>
                <Link className='placeOrder'  to={`/orderPayment/${this.state.totalPrice}`} onClick={this.linkEnabler} >Place Order</Link>
            </div>
        )
    }
}

import React, { Component } from 'react';
import './addItem.css'
import { Unsubscribe } from 'redux';
import { store } from '../../redux/store';
import { BurgerModel } from '../../models/burgerModel';
import swal from 'sweetalert';
import { NavLink } from 'react-router-dom';
import { ActionType } from '../../redux/action-type';
import { ToppingModel } from '../../models/toppingModule';
import { SideDishModel } from '../../models/sideDishModel';

interface AddItemState{
    burger:BurgerModel[],
    toppings:ToppingModel[],
    sideDish: SideDishModel[],
    linkDisabled:boolean
}

export class AddItem extends Component<any,AddItemState>{
    private unsubscribeStore: Unsubscribe;
    public constructor(props:any){
        super(props);
        this.state = {
            sideDish: store.getState().sideDish,
            toppings: store.getState().toppings,
            linkDisabled:true,
            burger: store.getState().burger //עדכון המוצרים ישירות מהסטור

        }
        this.unsubscribeStore = store.subscribe(()=>{
            this.setState({burger: store.getState().burger, toppings: store.getState().toppings, sideDish: store.getState().sideDish})
        })

    }
    public componentWillUnmount(): void{
        this.unsubscribeStore() // להפסיק להאזין לסטור כי הקומפוננט הפסיק להיות בשימוש
    }
   
    public removeItem =(ID:number)=>{ 
        document.getElementById(`${ID}`).classList.add('deleting')
        setTimeout(() => {
            store.dispatch({type: ActionType.DeleteBurger,payload:ID})
            store.dispatch({type:ActionType.DeleteToppings,payload:ID})
            store.dispatch({type:ActionType.DeleteSideDish,payload:ID})
        }, 400);
        const totalPrice = document.getElementById('totalPrice').innerHTML.replace( /^\D+/g, '').replace('$','');
        const currentPrice = document.getElementById(`Price${ID}`).innerHTML.replace( /^\D+/g, '').replace('$','');
        document.getElementById('totalPrice').innerHTML= '';
        document.getElementById('totalPrice').innerHTML =`Total: ${+totalPrice - +currentPrice}$`; 
    }
    public componentDidUpdate(){
        setTimeout(() => {
            this.getTotal()
        }, 100);
    }

    private getTotal(){
        let total = 0;
        for(let item of this.state.burger){
            let burgerPrice = +document.getElementById(`Price${item.id}`).innerHTML.replace( /^\D+/g, '').replace('$','');
            total = total + burgerPrice
        }
        for(let item of this.state.sideDish){
            let sideDishPrice = +document.getElementById(`Price${item.id}`).innerHTML.replace( /^\D+/g, '').replace('$','');
            total = total + sideDishPrice;
        }
        document.getElementById('totalPrice').innerHTML = ''
        document.getElementById('totalPrice').innerHTML = 'Total: ' +total+' $'
    }

    public placeOrder = () =>{
       return this.state.burger.length > 0;
    }

    public linkEnabler = (e:any) => {
        let { linkDisabled } = this.state
        if(this.state.burger.length > 0 || this.state.sideDish.length>0){
            linkDisabled = false
        }
        if(linkDisabled){
            swal({title: "Must Have At Least One Meal In Order",icon:"warning"})
            e.preventDefault()
        } 
    }


    
    public render(){
        return(
            <div className='addItem'>
                <h1>Items On Order</h1>
                <hr/>
                <div className ='items'>
                    {this.state.burger.map(b=>
                        this.state.toppings.map(t=>
                            b.id === t.id &&
                            <div id={`${b.id}`}  className='burgerItem' key={b.id}>
                                <span>{b.burgerType}</span>
                                <br/>
                                <span>Toppings:</span>
                                <React.Fragment>
                                    <div>
                                        {t.Onions === 0 || <span className='topping'>&nbsp;- Carmelized Onions - Amount: {t.Onions}<br/></span>}
                                        {t.Bacon=== 0  || <span className='topping'>&nbsp;- Bacon Jam - Amount: {t.Bacon}<br/></span>}
                                        {t.Mushrooms=== 0  || <span className='topping'>&nbsp;- Mushrooms - Amount: {t.Mushrooms}<br/></span>}
                                        {t.BlueCheese=== 0  || <span className='topping'>&nbsp;- Blue Cheese - Amount: {t.BlueCheese}<br/></span>}
                                        {t.ChiliPepers === 0  || <span className='topping'>&nbsp;- Chili Pepers - Amount: {t.ChiliPepers}<br/></span>}
                                        {t.Egg === 0  || <span className='topping'>&nbsp;- Egg - Amount: {t.Egg}</span>}
                                    </div>  
                                    <hr/>
                                    <h1 className='sides'>Side - {b.fries || b.mashedPotatos || b.friedOnions}</h1>
                                    <br/>
                                    <h1 className='sides'>Drink - {b.coke || b.sprite || b.fanta}</h1>
                                    <hr/>
                                    <span id={`Price${b.id}`}>Price - {+b.price+(t.Onions*2)+(t.Bacon*2)+(t.Mushrooms*2)+(t.BlueCheese*2)+(t.ChiliPepers*2)+(t.Egg*2)}$</span>
                                    <br/>
                                    <br/>
                                    <button onClick={()=>{this.removeItem(b.id)}}>Delete Item</button>
                                </React.Fragment>
                            </div>
                            ))}
                        <div className ='sideDish'>
                            {this.state.sideDish.map(s=>
                                <React.Fragment>
                                    <div id={`${s.id}`}>
                                        <div>{s.dishType}</div>
                                        <div id={`Price${s.id}`}>Price: {s.price}$</div>
                                        <button onClick={()=>{this.removeItem(s.id)}}>Delete Item</button>
                                    </div>
                                </React.Fragment>
                            )}
                        </div>
                </div>
                <div id='totalPrice'>Total: 0$</div>
                <div  id='orderLink'>
                    <NavLink to='/orderPayment' onClick={this.linkEnabler} >Place Order</NavLink>
                </div>
            </div>
        )
    }
}
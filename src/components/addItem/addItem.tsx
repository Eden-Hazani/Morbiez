import React, { Component } from 'react';
import './addItem.css'
import { Unsubscribe } from 'redux';
import { store } from '../../redux/store';
import { BurgerModel } from '../../models/burgerModel';
import swal from 'sweetalert';
import { NavLink } from 'react-router-dom';
import { ActionType } from '../../redux/action-type';

interface AddItemState{
    burger:BurgerModel[],
    linkDisabled:boolean
}

export class AddItem extends Component<any,AddItemState>{
    private unsubscribeStore: Unsubscribe;
    public constructor(props:any){
        super(props);
        this.state = {
            linkDisabled:true,
            burger: store.getState().burger //עדכון המוצרים ישירות מהסטור
        }
        this.unsubscribeStore = store.subscribe(()=>{
            this.setState({burger: store.getState().burger})
            let totalPrice = 0
            for(let item of store.getState().burger){
                totalPrice = totalPrice + (+item.price*2) + (+item.Onions*2) + (+item.Mushrooms*2) + (+item.Bacon*2) ;
                console.log(+item.price , +item.Onions  ,+item.Mushrooms , +item.Bacon) 
            }
            document.getElementById('totalPrice').innerHTML =`Total: ${totalPrice}$`
            
        })

    }
    public componentWillUnmount(): void{
        this.unsubscribeStore() // להפסיק להאזין לסטור כי הקומפוננט הפסיק להיות בשימוש
    }
   
    public removeItem =(burgerID:string)=>{ 
        document.getElementById(`${burgerID}`).classList.add('deleting')
        setTimeout(() => {
            store.dispatch({type: ActionType.DeleteBurger,payload:burgerID})
        }, 400);
    }

    public placeOrder = () =>{
       return this.state.burger.length > 0;
    }

    public linkEnabler = (e:any) => {
        let { linkDisabled } = this.state
        if(this.state.burger.length > 0){
            linkDisabled = false
        }
        if(linkDisabled){
            swal({title: "Please Complete The Form",icon:"warning"})
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
                    <div id={`${b.id}`}  className='burgerItem' key={b.id}>
                        <span>{b.burgerType}</span>
                        <br/>
                        <span>Toppings:</span>
                            <div>
                                {b.Onions && <span className='topping'>&nbsp;- Carmelized Onions - Amount: {b.Onions}<br/></span>}
                                {b.Bacon && <span className='topping'>&nbsp;- Bacon Jam - Amount: {b.Bacon}<br/></span>}
                                {b.Mushrooms && <span className='topping'>&nbsp;- Mushrooms - Amount: {b.Mushrooms}<br/></span>}
                                {b.BlueCheese && <span className='topping'>&nbsp;- Blue Cheese - Amount: {b.BlueCheese}<br/></span>}
                                {b.ChiliPepers && <span className='topping'>&nbsp;- Chili Pepers - Amount: {b.ChiliPepers}<br/></span>}
                                {b.Egg && <span className='topping'>&nbsp;- Egg - Amount: {b.Egg}</span>}
                            </div>
                        <hr/>
                        <h1>Side - {b.fries || b.mashedPotatos || b.friedOnions}</h1>
                        <br/>
                        <h1>Drink - {b.coke || b.sprite || b.fanta}</h1>
                        <hr/>
                        <span>Price - {+b.price+(b.Onions*2)+(b.Bacon*2)+(b.Mushrooms*2)+(b.BlueCheese*2)+(b.ChiliPepers*2)+(b.Egg*2)}$</span>
                        <br/>
                        <br/>
                        <button onClick={()=>{this.removeItem(`${b.id}`)}}>Delete Item</button>
                    </div>
                )}
                </div>
                <div id='totalPrice'>Total: 0$</div>
                <div  id='orderLink'>
                    <NavLink to='/orderPayment' onClick={this.linkEnabler} >Place Order</NavLink>
                </div>
            </div>
        )
    }
}
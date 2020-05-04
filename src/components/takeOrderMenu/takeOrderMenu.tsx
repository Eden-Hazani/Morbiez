import React, { Component } from 'react';
import './takeOrderMenu.css';
import { BurgerModel } from '../../models/burgerModel';
import { store } from '../../redux/store';
import { ActionType } from '../../redux/action-type';
import Swal from 'sweetalert2'
import swal from 'sweetalert';
import { ToppingModel } from '../../models/toppingModule';
import { SideDishModel } from '../../models/sideDishModel';



interface TakeAwayState{
    burger:BurgerModel,
    toppings:ToppingModel,
    sideDish: SideDishModel,
    showText:boolean
}


export class TakeOrderMenu extends Component<any,TakeAwayState>{
    public constructor(props:any){
        super(props)
        this.state ={burger: new BurgerModel(),
        showText:false,
        toppings: new ToppingModel(),
        sideDish: new SideDishModel()
      }
    }
   componentDidMount(){
    this.props.onHandleToUpdate(false)
     setTimeout(() => {
       this.setState({showText:true})
     }, 2000);
   }
    private add = (product:string) =>{
      let lastVal = +document.getElementById(`${product}`).innerHTML;
        if(lastVal>=3){
            swal({title: "can only have 3 of one topping",icon:"error"})
            return
        }
        const currVal = lastVal+1;
        document.getElementById(`${product}`).innerHTML = `${currVal}`
    }
    private detract = (product:string) =>{
        let lastVal = +document.getElementById(`${product}`).innerHTML;
        if(lastVal===0){
            return
        }
        const currVal = lastVal-1;
        document.getElementById(`${product}`).innerHTML = `${currVal}`
    } 
    private newBurger = async (product:string)=>{
        const { value: sides } = await Swal.fire({
            title: 'Please Select A Side',
            input: 'select',
            inputOptions: {
              fries: 'Fries',
              mashedPotatos: 'Mashed Potatos',
              friedOnions: 'Fried Onions',},
            inputPlaceholder: 'Select a Side',
            showCancelButton: true,
            inputValidator: (value) => {
              return new Promise((resolve) => {
                  if(value === 'fries'){
                    const burger = {...this.state.burger};
                    burger.fries = 'Fries';
                    this.setState({burger})
                    resolve()
                  }
                  if(value === 'mashedPotatos'){
                    const burger = {...this.state.burger};
                    burger.mashedPotatos = 'Mashed Potatos';
                    this.setState({burger})
                    resolve()
                  }
                  if(value === 'friedOnions'){
                    const burger = {...this.state.burger};
                    burger.friedOnions = 'Fried Onions';
                    this.setState({burger})
                    resolve()
                  }
              })
            }
          })
          const { value: drinks } = await Swal.fire({
            title: 'Please Select A Drink',
            input: 'select',
            inputOptions: {
              coke: 'Coke',
              sprite: 'Sprite',
              fanta: 'Fanta',},
            inputPlaceholder: 'Select a Drink',
            showCancelButton: true,
            inputValidator: (value) => {
              return new Promise((resolve) => {
                  if(value === 'coke'){
                    const burger = {...this.state.burger};
                    burger.coke = 'Coke';
                    this.setState({burger})
                    resolve()
                  }
                  if(value === 'sprite'){
                    const burger = {...this.state.burger};
                    burger.sprite = 'Sprite';
                    this.setState({burger})
                    resolve()
                  }
                  if(value === 'fanta'){
                    const burger = {...this.state.burger};
                    burger.fanta = 'Fanta';
                    this.setState({burger})
                    resolve()
                  }
              })
            }
          })
        const topping = ['Onions','BaconJem','Mushrooms','Egg','BlueCheese','ChiliPepers']
        const burgerType = document.getElementById(product).innerHTML;
        const price = +document.getElementById(`${product}Price`).innerHTML.replace('$','')
        const hasOnions = +document.getElementById(`${product}${topping[0]}`).innerHTML.replace('0','');
        const hasBacon = +document.getElementById(`${product}${topping[1]}`).innerHTML.replace('0','');
        const hasMushroom = +document.getElementById(`${product}${topping[2]}`).innerHTML.replace('0','');
        const hasEgg = +document.getElementById(`${product}${topping[3]}`).innerHTML.replace('0','');
        const hasBlueCheese = +document.getElementById(`${product}${topping[4]}`).innerHTML.replace('0','');
        const hasChiliPepers = +document.getElementById(`${product}${topping[5]}`).innerHTML.replace('0','');
        const burger = {...this.state.burger};
        burger.id = Math.floor(Math.random()*10000-1)+1;
        burger.price = price
        burger.burgerType = burgerType;
        this.setState({burger})
        const toppings = {...this.state.toppings};
        toppings.id = burger.id;
        toppings.Bacon = hasBacon;
        toppings.Mushrooms = hasMushroom;
        toppings.Onions = hasOnions;
        toppings.ChiliPepers = hasChiliPepers;
        toppings.Egg = hasEgg;
        toppings.BlueCheese = hasBlueCheese;
        this.setState({toppings})
        store.dispatch({type: ActionType.AddBurger,payload:burger})
        store.dispatch({type: ActionType.AddToppings,payload:toppings})
        for(let item in topping){
            document.getElementById(`${product}${topping[item]}`).innerHTML = '0'
        }
    }
    private newSideDish = (product:string)=>{
      const sideDishType = document.getElementById(product).innerHTML;
      const price = +document.getElementById(`${product}Price`).innerHTML.replace('$','');
      const sideDish = {...this.state.sideDish};
      sideDish.dishType = sideDishType;
      sideDish.id = Math.floor(Math.random()*10000-1)+1;
      sideDish.price = price;
      this.setState({sideDish})
      store.dispatch({type:ActionType.AddSideDish,payload:sideDish})
    }

  
    public render(){
      const {showText} = this.state;
        return(
            <div className = 'order'>
                {showText === false && <div id='LoadingGif'></div>}
                {showText && 
                <React.Fragment>
                    <div className='burger'>
                    <h1 id ='plainBurger'>Plain Burger</h1>
                    <h3>Our special Meat blend in a garlic butter rosted brioche bun topped with lettce tomatos pickles and onion</h3>
                    <h3 id='plainBurgerPrice'>12$</h3>
                    <h3>All toppings are 2$</h3>
                    <hr/>
                    <span>Carmelized Onions</span>
                    <button onClick={()=>{this.add('plainBurgerOnions')}}>+</button>
                    <span id='plainBurgerOnions'>0</span>
                    <button onClick={()=>{this.detract('plainBurgerOnions')}}>-</button>
                    <span className='marginSpan'>|</span>
                    {/* ----- */}
                    <span>Bacon Jam</span>
                    <button onClick={()=>{this.add('plainBurgerBaconJem')}}>+</button>
                    <span id='plainBurgerBaconJem'>0</span>
                    <button onClick={()=>{this.detract('plainBurgerBaconJem')}}>-</button>
                    <span className='marginSpan'>|</span>
                    {/* --- */}
                    <span>Mushrooms</span>
                    <button onClick={()=>{this.add('plainBurgerMushrooms')}}>+</button>
                    <span id='plainBurgerMushrooms'>0</span>
                    <button onClick={()=>{this.detract('plainBurgerMushrooms')}}>-</button>
                    <span className='marginSpan'>|</span>
                    {/* --- */}
                    <span>Egg</span>
                    <button onClick={()=>{this.add('plainBurgerEgg')}}>+</button>
                    <span id='plainBurgerEgg'>0</span>
                    <button onClick={()=>{this.detract('plainBurgerEgg')}}>-</button>
                    <br/>
                    {/* --- */}
                    <span>Blue Cheese</span>
                    <button onClick={()=>{this.add('plainBurgerBlueCheese')}}>+</button>
                    <span id='plainBurgerBlueCheese'>0</span>
                    <button onClick={()=>{this.detract('plainBurgerBlueCheese')}}>-</button>
                    <span className='marginSpan'>|</span>
                    {/* --- */}
                    <span>Chili Pepers</span>
                    <button onClick={()=>{this.add('plainBurgerChiliPepers')}}>+</button>
                    <span id='plainBurgerChiliPepers'>0</span>
                    <button onClick={()=>{this.detract('plainBurgerChiliPepers')}}>-</button>
                    <br/>
                    <button onClick={()=>{this.newBurger('plainBurger')}}>Add</button>
                
                </div>
                <hr/>
                <div className='cheeseBurger'>
                    <h1 id='cheeseBurger'>Cheese Burger</h1>
                    <h3>Our special Meat blend in a garlic butter rosted brioche bun topped with lettce tomatos pickles and onion with some good ol' american cheese</h3>
                    <h3 id='cheeseBurgerPrice'>17$</h3>
                    <h3>All toppings are 2$</h3>
                    <hr/>
                    <span>Carmelized Onions</span>
                    <button onClick={()=>{this.add('cheeseBurgerOnions')}}>+</button>
                    <span id='cheeseBurgerOnions'>0</span>
                    <button onClick={()=>{this.detract('cheeseBurgerOnions')}}>-</button>
                    <span className='marginSpan'>|</span>
                    {/* ----- */}
                    <span>Bacon Jam</span>
                    <button onClick={()=>{this.add('cheeseBurgerBaconJem')}}>+</button>
                    <span id='cheeseBurgerBaconJem'>0</span>
                    <button onClick={()=>{this.detract('cheeseBurgerBaconJem')}}>-</button>
                    <span className='marginSpan'>|</span>
                    {/* --- */}
                    <span>Mushrooms</span>
                    <button onClick={()=>{this.add('cheeseBurgerMushrooms')}}>+</button>
                    <span id='cheeseBurgerMushrooms'>0</span>
                    <button onClick={()=>{this.detract('cheeseBurgerMushrooms')}}>-</button>
                    <span className='marginSpan'>|</span>
                    <span>Egg</span>
                    <button onClick={()=>{this.add('cheeseBurgerEgg')}}>+</button>
                    <span id='cheeseBurgerEgg'>0</span>
                    <button onClick={()=>{this.detract('cheeseBurgerEgg')}}>-</button>
                    <br/>
                    {/* --- */}
                    <span>Blue Cheese</span>
                    <button onClick={()=>{this.add('cheeseBurgerBlueCheese')}}>+</button>
                    <span id='cheeseBurgerBlueCheese'>0</span>
                    <button onClick={()=>{this.detract('cheeseBurgerBlueCheese')}}>-</button>
                    <span className='marginSpan'>|</span>
                    {/* --- */}
                    <span>Chili Pepers</span>
                    <button onClick={()=>{this.add('cheeseBurgerChiliPepers')}}>+</button>
                    <span id='cheeseBurgerChiliPepers'>0</span>
                    <button onClick={()=>{this.detract('cheeseBurgerChiliPepers')}}>-</button>
                    <br/>
                    <button onClick={()=>{this.newBurger('cheeseBurger')}}>Add</button>
                </div>
                <hr/>
                <div className='sideDishes'>
                    <h2 id='hotWings'>Hot Wings</h2>
                    <div>Juicy Wings with our special hot Sauce</div>
                    <h3 id='hotWingsPrice'>10$</h3>
                    <br/>
                    <button onClick={()=>{this.newSideDish('hotWings')}}>Add</button>
                </div>
               </React.Fragment>
                }
            </div>
        )
    }
}

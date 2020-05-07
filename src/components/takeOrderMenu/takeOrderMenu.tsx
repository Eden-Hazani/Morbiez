import React, { Component } from 'react';
import './takeOrderMenu.css';
import { BurgerModel } from '../../models/burgerModel';
import { store } from '../../redux/store';
import { ActionType } from '../../redux/action-type';
import Swal from 'sweetalert2'
import swal from 'sweetalert';
import { ToppingModel } from '../../models/toppingModule';
import { ToppingPriceModal } from '../../models/toppingPriceModel';
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
        sideDish: new SideDishModel(),
      }
    }
   componentDidMount(){
    window.scrollTo(0, 0)
    this.props.onHandleToUpdate(false)
     setTimeout(() => {
       this.setState({showText:true})
     }, 2000);
   }
    private add = (product:string) =>{
      let lastVal = +document.getElementById(product).innerHTML;
      document.getElementById(`${product}Icon`).classList.add('animationAdd')
      setTimeout(() => {
        document.getElementById(`${product}Icon`).classList.remove('animationAdd')
      }, 200);
        if(lastVal>=3){
            swal({title: "can only have 3 of one topping",icon:"error"})
            return
        }
        const currVal = lastVal+1;
        document.getElementById(`${product}`).innerHTML = `${currVal}`
    }
    private detract = (product:string) =>{
      document.getElementById(`${product}Icon`).classList.add('animationRemove')
      setTimeout(() => {
        document.getElementById(`${product}Icon`).classList.remove('animationRemove')
      }, 200);
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
  
        const burgerType = document.getElementById(product).innerHTML;
        const price = +document.getElementById(`${product}Price`).innerHTML.replace('$','')
        const burger = {...this.state.burger};
        burger.id = Math.floor(Math.random()*10000-1)+1;
        burger.price = price
        burger.burgerType = burgerType;
        this.setState({burger})
        store.dispatch({type: ActionType.AddBurger,payload:burger})

        const topping = ['Onions','Bacon','Mushrooms','Egg','BlueCheese','ChiliPepers'] as const
        let toppings = {...this.state.toppings};
        for(let item of topping){
          let amountOfToppings = +document.getElementById(`${product}${item}`).innerHTML.replace('0','');
          let priceOfToppings = +document.getElementById(`${product}${item}Price`).innerHTML.replace('$','')
          Object.keys(toppings).forEach(function(key){
            if(key === item){
              toppings[key] = amountOfToppings * priceOfToppings;
            }
          })
        }
        toppings.id = burger.id;
        this.setState({toppings})
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
                    <hr/>
                    <div className='toppingMenu'>
                      <div id='plainBurgerOnionsIcon' className='toppingAnimation'>
                        <div>Carmelized Onions</div>
                        <div className='toppingMenuIcon' style={{backgroundImage:`url('/Morbiez/assets/images/onion-topping.svg')`}}></div>
                      </div>
                        <button onClick={()=>{this.add('plainBurgerOnions')}}>+</button>
                        <div id='plainBurgerOnions'>0</div>
                        <button onClick={()=>{this.detract('plainBurgerOnions')}}>-</button>
                        <div id='plainBurgerOnionsPrice'> {ToppingPriceModal.onion}$ </div>
                        {/* ----- */}
                    </div>
                    <div className='toppingMenu'>
                      <div id='plainBurgerBaconIcon' className='toppingAnimation'>
                        <div>Bacon Jam</div>
                        <div className='toppingMenuIcon' style={{backgroundImage:`url('/Morbiez/assets/images/bacon-topping.svg')`}}></div>
                      </div>
                        <button onClick={()=>{this.add('plainBurgerBacon')}}>+</button>
                        <div id='plainBurgerBacon'>0</div>
                        <button onClick={()=>{this.detract('plainBurgerBacon')}}>-</button>
                        <div id='plainBurgerBaconPrice'> {ToppingPriceModal.bacon}$ </div>
                        {/* --- */}
                    </div>
                    <div className='toppingMenu'>
                      <div id='plainBurgerMushroomsIcon' className='toppingAnimation'>
                        <div>Mushrooms</div>
                        <div className='toppingMenuIcon' style={{backgroundImage:`url('/Morbiez/assets/images/mushroom-topping.svg')`}}></div>
                      </div>
                        <button onClick={()=>{this.add('plainBurgerMushrooms')}}>+</button>
                        <div id='plainBurgerMushrooms'>0</div>
                        <button onClick={()=>{this.detract('plainBurgerMushrooms')}}>-</button>
                        <div id='plainBurgerMushroomsPrice'> {ToppingPriceModal.mushroom}$ </div>
                    </div>
                    <div className='toppingMenu'>
                      <div id='plainBurgerEggIcon' className='toppingAnimation'>
                        <div>Fried Egg</div>
                        <div className='toppingMenuIcon' style={{backgroundImage:`url('/Morbiez/assets/images/egg-topping.svg')`}}></div>
                      </div>
                        <button onClick={()=>{this.add('plainBurgerEgg')}}>+</button>
                        <div id='plainBurgerEgg'>0</div>
                        <button onClick={()=>{this.detract('plainBurgerEgg')}}>-</button>
                        <div id='plainBurgerEggPrice'> {ToppingPriceModal.egg}$ </div>
                        <br/>
                        {/* --- */}
                      </div>
                      <div className='toppingMenu'>
                        <div id='plainBurgerBlueCheeseIcon' className='toppingAnimation'>
                          <div>Blue Cheese</div>
                          <div className='toppingMenuIcon' style={{backgroundImage:`url('/Morbiez/assets/images/blueCheese-topping.svg')`}}></div>
                        </div>
                        <button onClick={()=>{this.add('plainBurgerBlueCheese')}}>+</button>
                        <div id='plainBurgerBlueCheese'>0</div>
                        <button onClick={()=>{this.detract('plainBurgerBlueCheese')}}>-</button>
                        <div id='plainBurgerBlueCheesePrice'> {ToppingPriceModal.blueCheese}$ </div>
                        {/* --- */}
                      </div>
                      <div className='toppingMenu' >
                        <div id='plainBurgerChiliPepersIcon' className='toppingAnimation'>
                          <div>Chili Pepers</div>
                          <div className='toppingMenuIcon' style={{backgroundImage:`url('/Morbiez/assets/images/chilliPepers-topping.svg')`}}></div>
                        </div>
                        <button onClick={()=>{this.add('plainBurgerChiliPepers')}}>+</button>
                        <div id='plainBurgerChiliPepers'>0</div>
                        <button onClick={()=>{this.detract('plainBurgerChiliPepers')}}>-</button>
                        <div id='plainBurgerChiliPepersPrice'> {ToppingPriceModal.chilliPepers}$ </div>
                      </div>
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
                    <div className='toppingMenu'>
                        <div id='cheeseBurgerOnionsIcon' className='toppingAnimation'>
                          <div>Carmelized Onions</div>
                          <div className='toppingMenuIcon' style={{backgroundImage:`url('/Morbiez/assets/images/onion-topping.svg')`}}></div>
                        </div>
                        <button onClick={()=>{this.add('cheeseBurgerOnions')}}>+</button>
                        <div id='cheeseBurgerOnions'>0</div>
                        <button onClick={()=>{this.detract('cheeseBurgerOnions')}}>-</button>
                        <div id='cheeseBurgerOnionsPrice'> {ToppingPriceModal.onion}$ </div>
                        {/* ----- */}
                    </div>
                    <div className='toppingMenu'>
                        <div id='cheeseBurgerBaconIcon' className='toppingAnimation'>
                          <div>Bacon Jam</div>
                          <div className='toppingMenuIcon' style={{backgroundImage:`url('/Morbiez/assets/images/bacon-topping.svg')`}}></div>
                        </div>
                        <button onClick={()=>{this.add('cheeseBurgerBacon')}}>+</button>
                        <div id='cheeseBurgerBacon'>0</div>
                        <button onClick={()=>{this.detract('cheeseBurgerBacon')}}>-</button>
                        <div id='cheeseBurgerBaconPrice'> {ToppingPriceModal.bacon}$ </div>
                        {/* --- */}
                    </div>
                    <div className='toppingMenu'>
                        <div id='cheeseBurgerMushroomsIcon' className='toppingAnimation'>
                          <div>Mushrooms</div>
                          <div className='toppingMenuIcon' style={{backgroundImage:`url('/Morbiez/assets/images/mushroom-topping.svg')`}}></div>
                        </div>
                        <button onClick={()=>{this.add('cheeseBurgerMushrooms')}}>+</button>
                        <div id='cheeseBurgerMushrooms'>0</div>
                        <button onClick={()=>{this.detract('cheeseBurgerMushrooms')}}>-</button>
                        <div id='cheeseBurgerMushroomsPrice'> {ToppingPriceModal.mushroom}$ </div>
                    </div>
                    <div className='toppingMenu'>
                        <div id='cheeseBurgerEggIcon' className='toppingAnimation'>
                          <div>Fried Egg</div>
                          <div className='toppingMenuIcon' style={{backgroundImage:`url('/Morbiez/assets/images/egg-topping.svg')`}}></div>
                        </div>
                        <button onClick={()=>{this.add('cheeseBurgerEgg')}}>+</button>
                        <div id='cheeseBurgerEgg'>0</div>
                        <button onClick={()=>{this.detract('cheeseBurgerEgg')}}>-</button>
                        <div id='cheeseBurgerEggPrice'> {ToppingPriceModal.egg}$ </div>
                        <br/>
                        {/* --- */}
                      </div>
                      <div className='toppingMenu'>
                        <div id='cheeseBurgerBlueCheeseIcon' className='toppingAnimation'>
                          <div>Blue Cheese</div>
                          <div className='toppingMenuIcon' style={{backgroundImage:`url('/Morbiez/assets/images/blueCheese-topping.svg')`}}></div>
                        </div>
                        <button onClick={()=>{this.add('cheeseBurgerBlueCheese')}}>+</button>
                        <div id='cheeseBurgerBlueCheese'>0</div>
                        <button onClick={()=>{this.detract('cheeseBurgerBlueCheese')}}>-</button>
                        <div id='cheeseBurgerBlueCheesePrice'> {ToppingPriceModal.blueCheese}$ </div>
                        {/* --- */}
                      </div>
                      <div className='toppingMenu'>
                        <div id='cheeseBurgerChiliPepersIcon' className='toppingAnimation'>
                          <div>Chili Pepers</div>
                          <div className='toppingMenuIcon' style={{backgroundImage:`url('/Morbiez/assets/images/chilliPepers-topping.svg')`}}></div>
                        </div>
                        <button onClick={()=>{this.add('cheeseBurgerChiliPepers')}}>+</button>
                        <div id='cheeseBurgerChiliPepers'>0</div>
                        <button onClick={()=>{this.detract('cheeseBurgerChiliPepers')}}>-</button>
                        <div id='cheeseBurgerChiliPepersPrice'> {ToppingPriceModal.chilliPepers}$ </div>
                      </div>
                      <br/>
                    <button onClick={()=>{this.newBurger('cheeseBurger')}}>Add</button>
                </div>
                <hr/>
                <div className='sideDishes'>
                  <div className='wings'>
                    <h3 id='hotWings'>Hot Wings</h3>
                    <div className='toppingMenuIcon' style={{backgroundImage:`url('/Morbiez/assets/images/chicken-wing-icon.svg')`}}></div>
                    <div>Juicy Wings with our special hot Sauce</div>
                    <h3 id='hotWingsPrice'>10$</h3>
                    <br/>
                    <button onClick={()=>{this.newSideDish('hotWings')}}>Add</button>
                  </div>
                </div>
               </React.Fragment>
                }
            </div>
        )
    }
}

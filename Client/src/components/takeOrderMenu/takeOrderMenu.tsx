import React, { Component, Props } from 'react';
import './takeOrderMenu.css';
import { BurgerModel } from '../../models/burgerModel';
import { store } from '../../redux/store';
import { ActionType } from '../../redux/action-type';
import Swal from 'sweetalert2'
import swal from 'sweetalert';
import { ToppingModel } from '../../models/toppingModule';
import { SideDishModel } from '../../models/sideDishModel';
import axios from 'axios';
import { DrinksModel } from '../../models/drinksModel';
import { SidesModel } from '../../models/sidesModel';
import { NewMealModel } from '../../models/newMealModel';
import { BurgerVsToppingModel } from '../../models/burgerVsToppingModel';
import { NewSideDishModel } from '../../models/newSideDishModel';
import uuid from 'react-uuid'
import { Unsubscribe } from 'redux';





interface TakeAwayState{
    newMeal: NewMealModel,
    newSideDish: NewSideDishModel,
    burger:BurgerModel[],
    toppings:ToppingModel[],
    drinks:DrinksModel[],
    sides: SidesModel[],
    sideDish: SideDishModel[],
    burgerVsTopping: BurgerVsToppingModel[],
    showText:boolean,
    pickedAddAnimation:boolean,
    pickedRemoveAnimation:boolean,
    pickedTopping: number
}


export class TakeOrderMenu extends Component<any,TakeAwayState>{
  private unsubscribeStore: Unsubscribe;
    public constructor(props:any){
        super(props)
        this.state ={burger: store.getState().burger,
        toppings: store.getState().toppings,
        drinks:store.getState().drinks,
        sides:store.getState().sides,
        sideDish: store.getState().sideDish,
        burgerVsTopping: store.getState().burgerVsTopping,
        showText:false,
        pickedAddAnimation:false,
        pickedRemoveAnimation:false,
        pickedTopping: null,
        newMeal: new NewMealModel(),
        newSideDish: new NewSideDishModel()
      }
      this.unsubscribeStore = store.subscribe(()=>{
        this.setState({
           burger: store.getState().burger,
           sideDish: store.getState().sideDish,
           toppings: store.getState().toppings,
           drinks: store.getState().drinks,
           sides: store.getState().sides,
           burgerVsTopping: store.getState().burgerVsTopping
          })
    })
    }
   public componentWillUnmount(){
    this.unsubscribeStore() 
    this.resetBvT();
    this.props.onHandleToUpdate(false)
    }
   public componentDidMount(){
    this.resetBvT();
    window.scrollTo(0, 0)
     setTimeout(() => {
       this.props.onHandleToUpdate(true)
       this.setState({showText:true})
     }, 1000);
   }

    private add = (id:number) =>{
      this.setState({pickedTopping:id})
      this.setState({pickedAddAnimation:true})
      setTimeout(() => {
        this.setState({pickedAddAnimation:false})
      }, 200);
      let burgerVsTopping = [...this.state.burgerVsTopping];    
        if(burgerVsTopping[id-1].amount>=3){
          swal({title: "can only have 3 of one topping",icon:"error"})
          return
        }    
      burgerVsTopping[id-1].amount = burgerVsTopping[id-1].amount + 1; 
      let newMeal = {...this.state.newMeal};
      if(newMeal.pickedToppings.length===0){
        newMeal.pickedToppings.push(burgerVsTopping[id-1])
      }
      for(let item of newMeal.pickedToppings){
        if(item.toppingId ===  burgerVsTopping[id-1].toppingId){
           item.amount = burgerVsTopping[id-1].amount;

        }if(newMeal.pickedToppings[newMeal.pickedToppings.length -1].toppingId !==  burgerVsTopping[id-1].toppingId){
          newMeal.pickedToppings.push(burgerVsTopping[id-1])
        }
      }
      this.setState({burgerVsTopping,newMeal});  
    }



    private detract = (id:number) =>{
      this.setState({pickedTopping:id})
      this.setState({pickedRemoveAnimation:true})
      setTimeout(() => {
        this.setState({pickedRemoveAnimation:false})
      }, 200);
      let burgerVsTopping = [...this.state.burgerVsTopping];    
      if(burgerVsTopping[id - 1].amount===0){
        return
      }     
      burgerVsTopping[id - 1].amount = burgerVsTopping[id - 1].amount - 1; 

      let newMeal = {...this.state.newMeal};

      if(newMeal.pickedToppings.length===0){
        newMeal.pickedToppings.push(burgerVsTopping[id-1])
      }
      for(let item of newMeal.pickedToppings){
        if(item.toppingId ===  burgerVsTopping[id-1].toppingId){
          item.amount = burgerVsTopping[id-1].amount 
        }
      }
      this.setState({burgerVsTopping,newMeal});  
    } 

    private pickDrink = async() =>{
      const drinks = this.state.drinks;
      let optionObjectDrink = {};
      drinks.map(t=>{
        optionObjectDrink[t.drinksId] = t.name
        return optionObjectDrink
      })
      const { value: drink } = await Swal.fire({
          title: 'Please Select A Drink',
          input: 'select',
          inputOptions: optionObjectDrink,
          inputPlaceholder: 'Select a Drink',
          showCancelButton: true,
          inputValidator: (value) => {
            return new Promise((resolve) => {
              let newMeal = {...this.state.newMeal}
              const pickedDrink = drinks[+value - 1].picked = optionObjectDrink[value];           
              newMeal.pickedDrink = pickedDrink;
              this.setState({newMeal})
              resolve()
            })
          }
        })
      }

      private pickSide = async() =>{
        const sides = this.state.sides;
        let optionObjectSide = {};
        sides.map(s=>{
          optionObjectSide[s.sideId] = s.name
          return optionObjectSide
        })
        const { value: side } = await Swal.fire({
          title: 'Please Select A Side',
          input: 'select',
          inputOptions: optionObjectSide,
          inputPlaceholder: 'Select a Side',
          showCancelButton: true,
          inputValidator: (value) => {
            return new Promise((resolve) => {
              let newMeal = {...this.state.newMeal}
              let pickedSide = sides[+value - 1].picked = optionObjectSide[value];           
              newMeal.pickedSides = pickedSide;
              this.setState({newMeal})
              resolve()
            })
          }
        })
      }
      private burgerBuilder = async(burgerId:number) =>{
        let newMeal = {...this.state.newMeal};
        newMeal.id = uuid()
        newMeal.burgerPrice = this.state.burger.filter(b=>b.burgerId === burgerId)[0].price;
        newMeal.burgerName = this.state.burger.filter(b=>b.burgerId === burgerId)[0].name;
        this.setState({newMeal})
        store.dispatch({type: ActionType.AddBurger,payload:this.state.newMeal})
        this.resetBvT();
      }


    private newBurger = async (burgerId:number)=>{
      await this.pickDrink();
      await this.pickSide();
      await this.burgerBuilder(burgerId);
    }

    private resetBvT = async()=>{
      const url = 'http://localhost:3000/api/morbiez';
      try{
        const newMeal = {...this.state.newMeal}
        newMeal.burgerName = null;
        newMeal.pickedToppings = [];
        newMeal.pickedSides = '';
        newMeal.pickedDrink = '';
        this.setState({newMeal})
        const bVtResp = await axios.get<BurgerVsToppingModel[]>(`${url}/burgers-vs-toppings`);
        const burgerVsTopping = bVtResp.data;
        this.setState({burgerVsTopping});        
      }catch(err){
        alert(err.message)
      }
    }


    private newSideDish = (id:number)=>{
      const newSideDish = {...this.state.newSideDish};
      newSideDish.id =  uuid();
      newSideDish.price =  this.state.sideDish.filter(s=>s.sideDishId === id)[0].price;
      newSideDish.dishType =  this.state.sideDish.filter(s=>s.sideDishId === id)[0].name;
      this.setState({newSideDish})
      store.dispatch({type:ActionType.AddSideDish,payload:newSideDish})
      
    }


  
    public render(){
      const {showText} = this.state;
      const pickedTopping = this.state.pickedTopping;
      const addAni = this.state.pickedAddAnimation;
      const removeAni = this.state.pickedRemoveAnimation;
        return(
            <div className = 'order'>
                {showText === false && <div id='LoadingGif'></div>}
                {showText && 
                <React.Fragment>
                  <h1>Burgers</h1>
                      {this.state.burger.map(b=> 
                            <div className='burger' key={b.burgerId}>
                                <h1>{b.name}</h1>
                                <h3>{b.description}</h3>
                                <h3>Price - {b.price}$</h3>
                                <br/>
                               {this.state.toppings.map(t=>
                                  <div className='toppingMenu' key={t.toppingId}>
                                    {this.state.burgerVsTopping.map(bVt=>
                                      <div key={bVt.burgerToppingId}>                 
                                        {bVt.toppingId === t.toppingId && b.burgerId === bVt.burgerId ?                           
                                           <React.Fragment>
                                            <div className='toppingAnimation'>
                                              <div>{t.name}</div>
                                              <div className={`toppingMenuIcon ${ addAni && 
                                                bVt.burgerToppingId === pickedTopping ? 'animationAdd' : null} ${removeAni && bVt.burgerToppingId === pickedTopping ? 'animationRemove': null}`}
                                                style={{backgroundImage:`url(http://localhost:3000/uploads/${t.imageFileLocation})`}}></div>
                                            </div>
                                            <button onClick={()=>this.add(bVt.burgerToppingId)}>+</button>
                                            <div>{bVt.amount}</div>
                                            <button onClick={()=>this.detract(bVt.burgerToppingId)}>-</button>
                                            </React.Fragment> 
                                        : null}
                                      </div> 
                                      )}
                                    <div>{t.price}$</div>
                               </div>
                               )}
                               <br/>
                               <button onClick={()=>this.newBurger(b.burgerId)}>Add Burger</button>
                            </div>
                      )}
                <div>
                  <h1>Sides</h1>
                  {this.state.sideDish.map(sD => 
                      <div className='sideDish' key={sD.sideDishId}>
                          <h3>{sD.name}</h3>
                          <br/>
                          <div>Price - {sD.price}$</div>
                          <div>{sD.description}</div>
                          <div className='sideDishIcon' style={{backgroundImage:`url(http://localhost:3000/uploads/${sD.imageFileLocation})`}}>{}</div>
                          <button onClick={()=>this.newSideDish(sD.sideDishId)}>Add</button>
                      </div>
                    )}
                </div>
               </React.Fragment>
                }
            </div>
        )
    }
}


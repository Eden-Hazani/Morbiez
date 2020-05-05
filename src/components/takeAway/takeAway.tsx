import React, { Component } from 'react';
import './takeAway.css';
import { BurgerModel } from '../../models/burgerModel';
import { AddItem } from '../addItem/addItem';
import { TakeOrderMenu } from '../takeOrderMenu/takeOrderMenu';

interface TakeAwayState{
    showText:boolean,
    burger:BurgerModel
}


export class TakeAway extends Component<any,TakeAwayState>{
    constructor(props:any){
        super(props)
        this.state = {burger: new BurgerModel(),
            showText: false}
    }
    componentDidMount(){
        document.body.style.backgroundImage = "url('/Morbiez/assets/images/takeout-background.jpg')"
        this.props.onHandleToUpdate(false)
        setTimeout(() => {
            this.setState({showText:true})
        }, 2000);
    }
    componentWillUnmount(){
        // removes the background image on component unmount so that the background will revert to the backgroup in the index.css files 
        document.body.style.removeProperty('background-Image')
    }
    public render(){
        const  {showText} = this.state
        return(
        <div className='takeAway'>
        {showText === false &&  <div id="LoadingGif"></div>}
        {showText &&
        <React.Fragment> 
            {/* Riding the props down to the children.*/}
            <TakeOrderMenu onHandleToUpdate={this.props.onHandleToUpdate}/>
            <div className='takeAwayOrder'>
                <div id='items'>
                    <AddItem/>
                </div>
            </div>
        </React.Fragment>
        }
        </div>
        )
    }
}

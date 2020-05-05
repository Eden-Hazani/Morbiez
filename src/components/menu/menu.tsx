import React, { Component } from 'react';
import './menu.css';
import { NavLink } from 'react-router-dom';
import { bubble as BurgerMenu } from 'react-burger-menu'

interface MenuState{
    menuOpen:boolean
}

export class Menu extends Component<any,MenuState>{
    constructor(props:any){
        super(props)
        this.state = {menuOpen:false}
    }

    closeMenuOnClick = ()=>{
        this.setState({menuOpen:false})
    }
    handleStateChange (state:any) {
        this.setState({menuOpen: state.isOpen})  
      }
    public render(){
        return( 
            <div className='menu'>
                <BurgerMenu id='bubble' overlayClassName={ "menuOverlay" } isOpen={this.state.menuOpen} onStateChange={(state)=> this.handleStateChange(state)}>
                    <NavLink to='/home' exact onClick={()=>this.closeMenuOnClick()}>
                        <div className='menuFlex'>
                            <span>Home</span>
                            <div className='menuBurgerIcon menuIcon'></div>
                        </div>
                    </NavLink>
                    <NavLink to='/restMenu' exact onClick={()=>this.closeMenuOnClick()}>
                        <div className='menuFlex'>
                            <span>Menu</span>
                            <div className='menuMenuIcon menuIcon'></div>
                        </div>
                    </NavLink>
                    <NavLink to='/reservations' exact onClick={()=>this.closeMenuOnClick()}>
                        <div className='menuFlex'>
                            <span>Reserve</span>
                            <div className='menuReserveIcon menuIcon'></div>
                        </div>
                    </NavLink>
                    <NavLink to='/takeAway' exact onClick={()=>this.closeMenuOnClick()}>
                        <div className='menuFlex'>
                            <span>Delivery</span>
                            <div className='menuDeliverIcon menuIcon'></div>
                        </div>
                    </NavLink>
                </BurgerMenu>
            </div>
        )
    }
}
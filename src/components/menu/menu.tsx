import React, { Component } from 'react';
import './menu.css';
import { NavLink } from 'react-router-dom';
import { bubble as BurgerMenu } from 'react-burger-menu'

export class Menu extends Component{
    public render(){
        return( 
            <div className='menu'>
                <BurgerMenu id='bubble'>
                    <NavLink to='/home' exact>Home</NavLink>
                    <NavLink to='/restMenu' exact>Menu</NavLink>
                    <NavLink to='/reservations' exact>Reservations</NavLink>
                </BurgerMenu>
            </div>
        )
    }
}
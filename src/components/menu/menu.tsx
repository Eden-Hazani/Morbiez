import React, { Component } from 'react';
import './menu.css';
import { NavLink } from 'react-router-dom';

export class Menu extends Component{
    public render(){
        return( 
            <div className='menu'>
                <NavLink to='/home' exact>Home</NavLink>
                <NavLink to='/restMenu' exact>Menu</NavLink>
                <NavLink to='/reservations' exact>Reservations</NavLink>
            </div>
        )
    }
}
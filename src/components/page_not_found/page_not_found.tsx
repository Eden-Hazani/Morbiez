import React, { Component } from 'react';
import './page_not_found.css'

export class PageNotFound extends Component{
    public render(){
        return(
            <div className='pageNotFound'>
                <h1>Burger does not exist</h1>
                <h4>Please click Home to view existing burgers</h4>
            </div>
        )
    }
}
import React, { Component } from 'react';
import './home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ImageSilder } from '../imageSlider/imageSlider';

export class Home extends Component{
    componentDidMount(){
        AOS.init({
          duration : 1000
        })
      }
    public render(){
        return(
            <div className='home'  data-aos='fade-up'>
                <div>
                    <h1>Welcome to Morbize, Best Burger Joint in Tel Aviv</h1>
                    <h4>Open Since 2001</h4>
                    <hr/>
                    <div>
                        <ImageSilder/>
                    </div>
                    <div className='about'  data-aos="zoom-in-up">
                        <div className ='mainChef'>
                            <div data-aos="zoom-in-up">
                                <h4> - Aharon Cohen - </h4>
                                <hr/>
                                <h5>Head Chef &amp; Owner</h5>
                            </div>
                                <div className ='chefImg'></div>
                                <p data-aos="zoom-in-up">"It is my belief that one good burger can change a presons life."
                                <br/>
                                <br/>
                                    -Aharon Cohen-
                                </p>
                          </div>
                    </div>
                </div>
            </div>
        )
    }
}
import React, { Component } from 'react';
import './home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ImageSilder } from '../imageSlider/imageSlider';

interface HomeState{
    showText:boolean;
}

export class Home extends Component <any,HomeState>{
    constructor(props:any){
        super(props)
        this.state = {showText: false}
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({showText:true})
        }, 2000);
        AOS.init({
          duration : 1000
        })
      }
    public render(){
        const  {showText} = this.state
        return(
            <div className='home'>
                {showText === false &&  <div id="LoadingGif"></div>}
                {showText && 
                <React.Fragment>
                    <div data-aos='fade-up'>
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
                                        <p className='chefTxt' data-aos="zoom-in-up">"It is my belief that one good burger can change a presons life."
                                        <br/>
                                        <br/>
                                            -Aharon Cohen-
                                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
                }
            </div>
        )
    }
}
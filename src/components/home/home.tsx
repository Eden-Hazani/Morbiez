import React, { Component } from 'react';
import './home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ImageSilder } from '../imageSlider/imageSlider';
import { News } from '../news/news';


interface HomeState{
    showText:boolean;
}

export class Home extends Component <any,HomeState>{
    constructor(props:any){
        super(props)
        this.state = {showText: false}
    }
    componentDidMount(){
        window.scrollTo(0, 0)

        setTimeout(() => {
            this.setState({showText:true})
            this.props.onHandleToUpdate(true)
        }, 1000);
        AOS.init({
          duration : 1000
        })
      }
      public componentWillUnmount(){
        this.props.onHandleToUpdate(false)

      }

     private clickedJumpMenu = (element) =>{
        document.getElementById(`${element}`).classList.add("clickedanimation");
        setTimeout(() => {
            document.getElementById(`${element}`).classList.remove("clickedanimation");
        }, 1000);
      }

    public render(){
        const  {showText} = this.state
        return(
            <div className='home'>
                {showText === false && <div id="LoadingGif"></div>}
                {showText && 
                <React.Fragment>
                    <div className='jumpMenu'>
                        <a href='#flipBoards' id='clickFlipBoards' onClick={() => this.clickedJumpMenu('clickFlipBoards')}><span>&#9632;</span> Flip Boards</a>
                        <hr/>
                        <a href='#aboutUs' id='clickAboutUs' onClick={() => this.clickedJumpMenu('clickAboutUs')}><span>&#9632;</span> About Us</a>
                        <hr/>
                        <a href='#contactUs' id='clickContactUs' onClick={() => this.clickedJumpMenu('clickContactUs')}><span>&#9632;</span> Contact Us</a>
                    </div>
                    <div data-aos='fade-up'>
                        <div>
                            <h1>Welcome to Morbize, Best Burger Joint in Tel Aviv</h1>
                            <h4>Open Since 2001</h4>
                            <hr/>
                            <br></br>
                            <br></br>
                            <div>
                                <ImageSilder/>
                            </div>
                            <div id='flipBoards'>
                                <News/>
                            </div>
                            <div className='about'  data-aos="zoom-in-up">
                                <div className ='mainChef' id='aboutUs'>
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
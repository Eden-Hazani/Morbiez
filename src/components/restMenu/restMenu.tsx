import React, { Component } from 'react';
import './restMenu.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface RestMenuState{
    showText:boolean
}

export class RestMenu extends Component<any,RestMenuState>{
    constructor(props:any){
        super(props)
        this.state = {showText:false}
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
            <div className='restMenu'>
                {showText === false && <div id="LoadingGif"></div>}
               {showText && 
                <React.Fragment>
                    <div className='restMenu' data-aos='fade-up'>
                        <div>
                        <h2>Menu</h2>
                        </div>
                        <span>- Burgers -</span>
                        <br/>
                        <div className='dish'>
                            <h3> - Burger - </h3>
                            <hr/>
                            <p>Our special Meat blend in a garlic butter rosted brioche bun topped with lettce tomatos pickles and onion</p>
                            <br/>
                            <p>Toppings - Egg, Bacon, Blue Cheese, Mushrooms, Chile Pepers - 2$ -</p>
                            <p>- 12$ -</p>
                            <br/>
                            <h3> -Double Cheese Burger - </h3>
                            <hr/>
                            <p>Our special Meat blend in a garlic butter rosted brioche bun topped with lettce tomatos pickles and onion with some good ol' american cheese</p>
                            <br/>
                            <p>Toppings - Egg, Bacon, Blue Cheese, Mushrooms, Chile Pepers - 2$ -</p>
                            <p>- 17$ -</p>
                        </div>
                        <br/>
                        <br/>
                        <span>- Sides -</span>
                        <div className = 'dish sideDish'>
                            <h3>Fries</h3>
                            <hr/>
                            <p>Our signature Fries</p>
                            <br/>
                            <p>Toppings - Cheese Mountain, Bacon, Antricot Chunks, Chile Pepers - 0.5$ -</p>
                            <br/>
                            <h3>Wings</h3>
                            <hr/>
                            <p>Hot chili wings, Hot as Chili Wings should be </p>
                            <br/>
                            <p>Toppings - Cheese Mountain, Bacon, Antricot Chunks, Chile Pepers - 0.5$ -</p>
                        </div>
                    </div>
                </React.Fragment>
               } 
            </div>
        )
    }
}
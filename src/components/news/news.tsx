import React, { Component } from 'react';
import './news.css';
import ReactCardFlip from 'react-card-flip';


interface NewsState{
    isFlipped1:boolean
    isFlipped2:boolean
    isFlipped3:boolean
}

export class News extends Component<any,NewsState>{
    constructor(props:any) {
        super(props);
          this.state = {
          isFlipped1: false,
          isFlipped2:false,
          isFlipped3:false
        };
        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick3 = this.handleClick3.bind(this);
      }
      handleClick1(e:any) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped1: !prevState.isFlipped1 }));
      }
      handleClick2(e:any) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped2: !prevState.isFlipped2 }));
      }
      handleClick3(e:any) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped3: !prevState.isFlipped3 }));
      }
    public render(){
        return(
            <div className='news'>
                <div className='flipCard'>
                    <ReactCardFlip isFlipped={this.state.isFlipped1} flipDirection="horizontal">
                    <div className='frontCard1'>
                        <h1>News</h1> 
                        <hr/>
                        <h5>Join our News letter to get the hottest burger related news!</h5>
                        <div className='cardGif'></div>
                        <button onClick={this.handleClick1}>Sign Up</button>
                    </div>
            
                    <div className='backCard1'> 
                        <h1>Burgers</h1>
                        <button onClick={this.handleClick1}>Submit</button>
                    </div>
                    </ReactCardFlip>
                </div>
{/* ----------------------------------------------------------------------------------- */}
                <div className='flipCard'>
                    <ReactCardFlip isFlipped={this.state.isFlipped2} flipDirection="horizontal">
                    <div  className='frontCard2'>
                        <h1>TakeAway!</h1>
                        <h5>New! order deliveries to entire Tel-Aviv</h5>
                        <hr/>
                        <div className='cardGif2'></div>
                    <button onClick={this.handleClick2}>Order Now!</button>
                    </div>
            
                    <div className='backCard2'>
                        This is the back of the card.
                        <button onClick={this.handleClick2}>Click to flip</button>
                    </div>
                    </ReactCardFlip>
                </div>
{/* ----------------------------------------------------------------------------------- */}
                <div className='flipCard'>
                    <ReactCardFlip isFlipped={this.state.isFlipped3} flipDirection="horizontal">
                    <div className='frontCard3'>
                        <h1>Reviews</h1>
                        <h5>See for yourself just how good our burger really are</h5>
                        <hr/>
                        <div className='cardGif3'></div>
                    <button onClick={this.handleClick3}>Click to flip</button>
                    </div>
            
                    <div className='backCard3'>
                    This is the back of the card.
                    <button onClick={this.handleClick3}>Click to flip</button>
                    </div>
                    </ReactCardFlip>
                </div>

            </div>
        )
    }

}
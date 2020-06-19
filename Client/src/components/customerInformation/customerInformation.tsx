import React, { Component, ChangeEvent } from 'react';
import './customerInformation.css';
import { CustomerInformationModel } from '../../models/customerInformationModel';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { Unsubscribe } from 'redux';
import { store } from '../../redux/store';
import { SendOrderModel } from '../../models/sendOrderModel';
import { ActionType } from '../../redux/action-type';
import { NewMealModel } from '../../models/newMealModel';
import { NewSideDishModel } from '../../models/newSideDishModel';


interface CustomerInformationState{
    totalPrice:number
    customerInfo:CustomerInformationModel
    linkDisabled:boolean
    sendOrder: SendOrderModel[]
    meal: NewMealModel[]
    sideDish: NewSideDishModel[]
}

export class CustomerInformation extends Component<any,CustomerInformationState>{
    private unsubscribeStore: Unsubscribe;
    constructor(props:any){
        super(props)
        this.state ={
            sideDish: store.getState().newSideDish,
            meal: store.getState().meal,
            sendOrder:store.getState().sendOrder,
            linkDisabled: true,
            customerInfo: new CustomerInformationModel(),
            totalPrice:this.props.match.params.totalPrice
        }
        this.unsubscribeStore = store.subscribe(()=>{
            this.setState({
                sendOrder:store.getState().sendOrder,
                meal:store.getState().meal,
                sideDish: store.getState().newSideDish
            })
        })
    }
    componentDidMount(){
        setTimeout(() => {
            this.props.onHandleToUpdate(true)
        }, 1000);
    }
    public componentWillUnmount(){
        this.unsubscribeStore() 
        this.props.onHandleToUpdate(false)
      }
    
    private setFirstName= (args:ChangeEvent<HTMLInputElement>)=>{
        const value = args.target.value;
        let customerInfo = {...this.state.customerInfo}
        customerInfo.firstName = value;
        this.setState({customerInfo})
    }
        
    private setLastName= (args:ChangeEvent<HTMLInputElement>)=>{
        const value = args.target.value;
        let customerInfo = {...this.state.customerInfo}
        customerInfo.lastName = value;
        this.setState({customerInfo})
    }

    private setTelNumber= (args:ChangeEvent<HTMLInputElement>)=>{
        const value = args.target.value;
        let customerInfo = {...this.state.customerInfo}
        customerInfo.phoneNumber = value;
        this.setState({customerInfo})
    }

    private setEmail= (args:ChangeEvent<HTMLInputElement>)=>{
        const value = args.target.value;
        let customerInfo = {...this.state.customerInfo}
        customerInfo.email = value;
        this.setState({customerInfo})
    }
    
    private setAddress= (args:ChangeEvent<HTMLInputElement>)=>{
        const value = args.target.value;
        let customerInfo = {...this.state.customerInfo}
        customerInfo.address = value;
        this.setState({customerInfo})
    }

    private setCity= (args:ChangeEvent<HTMLInputElement>)=>{
        const value = args.target.value;
        let customerInfo = {...this.state.customerInfo}
        customerInfo.city = value;
        this.setState({customerInfo})
    }

    private setZip= (args:ChangeEvent<HTMLInputElement>)=>{
        const value = +args.target.value;
        let customerInfo = {...this.state.customerInfo}
        customerInfo.zip = value;
        this.setState({customerInfo})
    }

    private reviewOrder = (e:any)=>{
         let { linkDisabled } = this.state

        if(this.state.customerInfo.firstName !== ''
            && this.state.customerInfo.lastName !==''
            && this.state.customerInfo.phoneNumber !== ''
            && this.state.customerInfo.zip !== undefined
            && this.state.customerInfo.address !== ''
            && this.state.customerInfo.city !== ''
            && this.state.customerInfo.email !== ''
        ){
            console.log(this.state.customerInfo)
            store.dispatch({type: ActionType.SendInformationToOrder,payload:this.state.customerInfo})
            store.dispatch({type: ActionType.SendMealItemsToOrder,payload:this.state.meal})
            store.dispatch({type: ActionType.SendSideDishItemsToOrder,payload:this.state.sideDish})
        linkDisabled = false
        }if(linkDisabled){
            swal({title: "Please Fill Out the entire form",icon:"warning"})
            e.preventDefault()
        }
    }

    render(){
        return(
            <div className='customerInformation'>
                <div>
                    <h3>Address &amp; Contact Info</h3>
                    <form className='customerInformationForm'>
                        <div className='personalInfo'>
                            <div>
                                <label>First Name:</label>
                                <input type='text' name='firstName' placeholder='John' onChange={this.setFirstName}></input>
                                <label>Last Name:</label>
                                <input type='text' name='lastName' placeholder='Adams' onChange={this.setLastName}></input>
                                <label>Phone Number:</label>
                                <input type='tel' name='phoneNumber' placeholder='054-1234567' onChange={this.setTelNumber}></input>
                                <label>Email:</label>
                                <input type='email' name='email' placeholder='John@example.com' onChange={this.setEmail}></input>
                            </div>
                        </div>
                        <div className='addressInfo'>
                            <div>
                                <label>Street Name &amp; Number:</label>
                                <input type='text' name='address' placeholder='rothschild boulevard' onChange={this.setAddress}></input>
                                <label>City:</label>
                                <input type='text' name='city' placeholder='Tel-Aviv' onChange={this.setCity}></input>
                                <label>Zip:</label>
                                <input type="text" name="zip" placeholder="10001" onChange={this.setZip}></input>
                            </div>
                        </div>
                        <hr/>
                        <h3>Payment</h3>
                        <div className='cardTypes'>
                            <h2>Accepted Cards</h2>
                            <div className='cardIcons'>
                                <img src='/Morbiez/assets/images/mastercard-card.svg' alt=''></img>
                                <img src='/Morbiez/assets/images/visa-card.svg' alt=''></img>
                                <img src='/Morbiez/assets/images/diners-club-card.svg' alt=''></img>
                                <img src='/Morbiez/assets/images/american-express-card.svg' alt=''></img>
                            </div>
                        </div>
                        <br/>
                        <div className='creditInfo'>
                            <div>
                                <label>Cardholder Name: </label>
                                <input type='text' name='cName' placeholder="John Adams"></input>
                                <label>Card Number:</label>
                                <input type='text' name='cName' placeholder="1111-2222-3333-4444"></input>
                                <label>CVV:</label>
                                <input type='text' name='cvvName' placeholder="111"></input>
                            </div>
                            <div>
                                <label>Exp Month</label>
                                <input type="text" name="expmonth" placeholder="September"></input>
                                <label>Exp Year</label>
                                <input type="text" name="expmonth" placeholder="2020"></input>
                            </div>
                        </div>
                        <Link className='placeOrder' to={`/orderPayment/${this.state.totalPrice}`} onClick={this.reviewOrder}>Review Order</Link>
                    </form>
                </div>
            </div>
        )
    }
}
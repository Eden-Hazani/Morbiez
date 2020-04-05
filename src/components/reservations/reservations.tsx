import React, { Component, ChangeEvent } from 'react';
import './reservations.css';
import { ReservationsModel } from '../../models/reservationsModel';
import axios from 'axios';

interface ReservationsState{
    showText:boolean;
    reservations: ReservationsModel;
    errors: {fullnameError:string, dateError:string, NumberOfPeopleError:string};
}

export class Reservations extends Component<any,ReservationsState>{
    public constructor(props:any){
        super(props)
        this.state = {
            showText: false,
            reservations: new ReservationsModel(),
            errors: { fullnameError: "*",dateError: '*',NumberOfPeopleError: '*'}
        }
    }
    private setFullName = (args: ChangeEvent<HTMLInputElement>) =>{
        const fullname = args.target.value;
        let fullNameError = '';
        if (fullname === ""){
            fullNameError = 'Missing Name!'
        }
        if(fullname.length>30){
            fullNameError = 'Name cannot be above 30 characters!'
        }
        if( /\d/.test(fullname)){
            fullNameError = 'Name cannot contain numbers!'
        }
        const reservations = {...this.state.reservations}
        reservations.fullName = fullname
        this.setState({reservations});

        const errors = {...this.state.errors}
        errors.fullnameError = fullNameError;
        this.setState({errors});
    }

    // ------------------------------------------------------------------

    private setDate= (args: ChangeEvent<HTMLInputElement>) =>{
        const date = args.target.value;
        const today = new Date().getTime()
        const resDate = new Date(date).getTime()

        let dateError = '';
        if (date === ""){
            dateError = 'Missing Date!'
        }
        if(resDate<today){
            dateError = 'Cannot reserve table in the past'
        }
        const reservations = {...this.state.reservations}
        reservations.date = date
        this.setState({reservations});

        const errors = {...this.state.errors}
        errors.dateError = dateError;
        this.setState({errors});
    } 

    // ------------------------------------------------------------------

    private setNumberOfPeople= (args: ChangeEvent<HTMLInputElement>) =>{
        const numberOfPeople = args.target.value === "" ? undefined : +args.target.value;

        let NumberOfPeopleError = '';
        if (numberOfPeople === undefined){
            NumberOfPeopleError = 'Missing Number of People!'
        }
        if (numberOfPeople>16){
            NumberOfPeopleError = 'Number of People cannot be over 16!'
        }
        if (numberOfPeople<0){
            NumberOfPeopleError = "Can't be negative!"
        }


        const reservations = {...this.state.reservations}
        reservations.numberOfPeople = numberOfPeople
        this.setState({reservations});

        const errors = {...this.state.errors}
        errors.NumberOfPeopleError = NumberOfPeopleError;
        this.setState({errors});
    } 

    // ------------------------------------------------------------------
    private addReservation = async() =>{
        try{
            if(!this.isFormLegal()){
                alert('Please correct the form')
                return
            }
            const response = await axios.post<ReservationsModel>("http://localhost:3001/reservations",this.state.reservations)
            const addedReservation = response.data;
            alert('Reservation complete! your reserved table number is: '+addedReservation.id )
        }catch(err){
            alert(err)
        }
    }

    private isFormLegal = () =>{
        return this.state.errors.NumberOfPeopleError === '' &&
            this.state.errors.dateError === '' &&
            this.state.errors.fullnameError === '';
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({showText:true})
        }, 2000);
    }

    public render(){
        const  {showText} = this.state
        return(
            <div className = 'reservation'>
                {showText === false && <div id="LoadingGif"></div>}
                {showText && 
                        <div className = 'reservations'  data-aos='fade-up'>
                            <h1>Reserve your table now!</h1>
                            <hr/>
                            <span className='fieldTitle'>Full Name</span>
                            <input type ='text' value={this.state.reservations.fullName|| ""} onChange={this.setFullName}/>
                            <span>{this.state.errors.fullnameError}</span>
                            <br /><br />
                            <span className='fieldTitle'>Date</span>
                            <input type='date' value={this.state.reservations.date || undefined} onChange={this.setDate}/>
                            <span>{this.state.errors.dateError}</span>
                            <br /><br />
                            <span className='fieldTitle'>Number of Diners</span>
                            <input type='number' value={this.state.reservations.numberOfPeople || undefined} onChange={this.setNumberOfPeople}/>
                            <span>{this.state.errors.NumberOfPeopleError}</span>
                            <br /><br />
                            <button onClick={this.addReservation}>Approve Reservation</button>
                        </div>
                }
            </div>
        )
    }
}
import React, { Component, ChangeEvent } from 'react';
import './reservations.css';
import { ReservationsModel } from '../../models/reservationsModel';
import axios from 'axios';

interface ReservationsState{
    showText:boolean;
    reservations: ReservationsModel;
    errors: {fullnameError:string, dateError:string, NumberOfPeopleError:string,timeError:string};
    
}

export class Reservations extends Component<any,ReservationsState>{
    public constructor(props:any){
        super(props)
        this.state = {
            showText: false,
            reservations: new ReservationsModel(),
            errors: { fullnameError: "*",dateError: '*',NumberOfPeopleError: '*', timeError:'*'}
        }
    }
      componentDidMount(){
      document.body.style.backgroundImage = "url('/Morbiez/assets/images/reservation-background.jpg')"
      setTimeout(() => {
          this.setState({showText:true})
          this.props.onHandleToUpdate(true)
          this.timeOptions()
      }, 1000);
    }
    componentWillUnmount(){
        // removes the background image on component unmount so that the background will revert to the backgroup in the index.css files 
        document.body.style.removeProperty('background-Image')
        this.props.onHandleToUpdate(false)
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
        const todayDate = new Date();
        const today = new Date(+todayDate.getFullYear(),+todayDate.getMonth(),+todayDate.getDate()).getTime()
        const resDate = new Date(+date.split('-')[0],+date.split('-')[1]-1,+date.split('-')[2]).getTime()
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
        return date
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
        reservations.numberOfPeople = `${numberOfPeople}`
        this.setState({reservations});

        const errors = {...this.state.errors}
        errors.NumberOfPeopleError = NumberOfPeopleError;
        this.setState({errors});
    } 

    // ------------------------------------------------------------------
    private setTime= (args: ChangeEvent<HTMLSelectElement>) =>{
        const time = args.target.value;
        let timeError = '';
        if(this.state.reservations.date){
            const hours = time.split(':')[0]
            const minuets = time.split(':')[1]
            const date = new Date();
            const today = date.getTime()
           
            const resDate = new Date(+this.state.reservations.date.split('-')[0],+this.state.reservations.date.split('-')[1]-1,
                +this.state.reservations.date.split('-')[2],+hours,+minuets).getTime()
            if(resDate<today){
                timeError = 'Cannot reserve table in the past'
            }
        }
        if(this.state.reservations.date === undefined){
            timeError = 'Must fill date first!'
        }
        if(time === 'Select Time'){
            timeError = 'Pick Time Of Arrivel'
        }
        if (time === ""){
            timeError = 'Missing Time Of Arrivel!'
        }
        
        const reservations = {...this.state.reservations}
        reservations.timeOfArrivel = time
        this.setState({reservations});

        const errors = {...this.state.errors}
        errors.timeError = timeError;
        this.setState({errors});
    } 

    // ------------------------------------------------------------------

    private timeOptions = () =>{
        var sel = document.getElementById('selector');
        let hour = 8;
        let min = 0;
        for(let i=23;hour<i;min= min + 30){
            if(min === 60){
                min = 0;
                hour++
            }
            let opt = document.createElement('option');
            if(hour<10){
                opt.appendChild( document.createTextNode(`0${hour}:${min===0 ?'00':min}`) );
            }
            if(hour>=10){
                opt.appendChild( document.createTextNode(`${hour}:${min===0 ?'00':min}`) );
            }
            opt.value = `${hour}:${min}`; 
            sel.appendChild(opt); 
        }
        return null
    }

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
            this.state.errors.fullnameError === '' &&
            this.state.errors.timeError === '';
    }
    

    public render(){
        const  {showText} = this.state
        
        return(
            <div className = 'reservation'>
                {showText === false && <div id="LoadingGif"></div>}
                {showText && 
                        <div className = 'reservations' >
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
                            <span className='fieldTitle'>Time Of Arrivel</span>
                            <select id='selector' defaultValue={'DEFAULT'} value={this.state.reservations.timeOfArrivel || undefined} onChange={this.setTime}>
                                <option value="DEFAULT" disabled hidden>Select Time</option>
                            </select>
                            <span>{this.state.errors.timeError}</span>
                            <br /><br />
                            <button onClick={this.addReservation}>Approve Reservation</button>
                        </div>
                }
            </div>
        )
    }
}
import React, { Component, ChangeEvent } from 'react';
import './contactUs.css'

interface ContactUsState{
    errors:{nameError:string,mailError:string},
    showText:boolean
}

export class ContactUs extends Component<any,ContactUsState>{
    constructor(props:any){
        super(props)
        this.state = {
            showText: false,
            errors:{nameError:'*',mailError:'*'}
        }
    }
    
    private setName = (args:ChangeEvent<HTMLInputElement>)=>{
        const name = args.target.value;
        let nameError = '';
        if(name===''){
            nameError = 'Missing Name';
        }
        if(/\d/.test(name)){
            nameError = 'Name cannot contain numbers!'
        }
        if(name.length<2){
            nameError = 'Must Be a Real Name'
        }
        const errors = {...this.state.errors};
        errors.nameError = nameError;
        this.setState({errors})
    }
    private setMail = (args:ChangeEvent<HTMLInputElement>)=>{
        const mail = args.target.value;
        let mailError = '';
        if(mail===''){
            mailError = 'Mail Is Missing!'
        }
        if(!this.validateEmail(mail)){
            mailError ='Incorrect Mail Adress'
        }
        const errors = {...this.state.errors};
        errors.mailError = mailError;
        this.setState({errors})
    }
    validateEmail = (email:any) =>{
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({showText:true})
        }, 1000);
    }

    render(){
        const  {showText} = this.state
        return(
            <div className='contactUs' id='contactUs'>
                {showText && 
                <React.Fragment>
                    <div className='contactRest'>
                            <h3>Contact Us!</h3>
                        <span className='shareTxt'>What to share a burger experience or just vent about your Loud neighbors? feel free to message us</span>
                        <form style={{display:'inline-block'}}>
                            <div className='textInput'>
                                <label>Your Email:&nbsp;<input type='text' onChange={this.setMail}></input></label>
                                <span className='errorSpan'>{this.state.errors.mailError}</span>
                            </div>
                            <div className='textInput'>
                                <label>Your Name:&nbsp;<input type='text' onChange={this.setName}></input></label>
                                <span className='errorSpan'>{this.state.errors.nameError}</span>
                            </div>
                            <div dir="rtl" className='textField'>
                                <span>Tell Us Whats On Your Mind!</span>
                                <br/>
                                <textarea></textarea>
                            </div>
                            <button>Submit</button>
                        </form>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d845.1506357303!2d34.76771562928058!3d32.07999719882429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x151d4c7c01264941%3A0x85e4e4f18fc62d8!2sHaYarkon%20106%2C%20Tel%20Aviv-Yafo!3m2!1d32.0799972!2d34.768262799999995!5e0!3m2!1sen!2sil!4v1587375633580!5m2!1sen!2sil" className='googleMap'  aria-hidden="false" title='maps'></iframe>
                        <hr/>
                        <div className='locationLine'>
                            <div className='locationIcon'></div>
                            <span className='locationSpan'>- HaYarkon 106, Tel Aviv-Yafo</span>
                        </div>
                    
                    </div>
                </React.Fragment>
                }
                
            </div>
        )
    }
}
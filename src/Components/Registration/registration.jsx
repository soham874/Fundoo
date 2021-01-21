import React from 'react'
import { TextInput } from '../InputField/inputFields'
import logo from '../../Assets/account.svg'
import './registration.css'
import { Link } from 'react-router-dom'
import { Checkbox } from '@material-ui/core'


const patternFirstName = RegExp('^[A-Z][a-z]{2,}$')         //1
const patternLastName = RegExp('^[A-Z][a-z]{2,}$')          //2
const patternPassword = RegExp('(?=.*[A-Z])(?=.*[0-9])(?=[^.,:;!@#$%^&*_+=]*[.,:;!@#$%^&*_+=][^.,:;!@#$%^&*_+=]*$).{8,}$')

const regexArray = [patternFirstName, patternLastName, patternLastName, patternPassword]
const inputArray = ["First name", "Last name", "Username", "Password"]
const inputRefs = ["firstName", "lastName", "userName", "password"]

let inputValues     //corresponding field values

export default class registrationForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: React.createRef(),
            lastName: React.createRef(),
            userName: React.createRef(),
            password: React.createRef(),
            confirm: React.createRef(),
        }
    }

    //receives field value from child
    handleCallback = (inputString) => {
        return inputString
    }

    //makes sure password matches confirm
    passwordCheck = () => {
        let password = this.state.password.current.returnValue()
        let confirm = this.state.confirm.current.returnValue()

        if (password !== confirm || confirm.length === 0 ){
            this.state.confirm.current.setCustomError("Passwords donot match")
            return 1
        }

        return 0
    }

    //analyses input data on form submission
    checkInput = (e) => {
        inputValues = []
        e.preventDefault();

        //input validation check
        for (let i = 0; i < inputArray.length; i++) {
            let input = this.state[inputRefs[i]].current.returnValue()
            if (!regexArray[i].test(input))
                if (input.length === 0)
                    this.state[inputRefs[i]].current.setFieldEmpty(`${inputArray[i]}`)
                else
                    this.state[inputRefs[i]].current.setFieldError(`${inputArray[i]}`)
            else
                inputValues.push(input)
        }

        //password confirmation check
        let eqFlag = this.passwordCheck()

        if (inputValues.length === inputArray.length && eqFlag === 0){
            alert("chesk suceeded, do next task")
        }
    }

    //toggles visibility of password and confirm box
    toggleVisibility = () => {
        this.state.password.current.togglePassword()
        this.state.confirm.current.togglePassword()
    }

    render() {
        return (

            <div className="formback">
                <form className="left_container">

                    <div className="independet_text">
                        <b><span style={{ color: "#4285F4" }}>F</span>
                            <span style={{ color: "#DB4437" }}>u</span>
                            <span style={{ color: "#F4B400" }}>n</span>
                            <span style={{ color: "#4285F4" }}>d</span>
                            <span style={{ color: "#0F9D58" }}>o</span>
                            <span style={{ color: "#DB4437" }}>o</span></b>
                    </div>
                    <div className="independet_text">Create your Fundoo Account</div>

                    <div className="name_field_containers">
                        <TextInput label="First Name" ref={this.state.firstName} parentCallback={this.handleCallback} />
                        <TextInput label="Last Name" ref={this.state.lastName} parentCallback={this.handleCallback} />
                    </div>

                    <TextInput label="Username" ref={this.state.userName} parentCallback={this.handleCallback} />
                    <div className="password_text">You can use letters, number & periods</div>

                    <div className="password_fields_container">
                        <TextInput label="Password" ref={this.state.password} parentCallback={this.handleCallback} type="password"/>
                        <TextInput label="Confirm" ref={this.state.confirm} parentCallback={this.handleCallback} 
                        type="password"/>
                    </div>
                    <div className="password_text">Use 8 or more charecters with a mix of letters, numbers and symbols</div>
                    <div>
                        <Checkbox onClick={this.toggleVisibility}></Checkbox>
                        <span className="password_text" style={{ padding: 0 }}>Show Password</span>
                    </div>
                    <div className="options">
                        <Link to="/login" className="link">Sign in instead</Link>
                        <span><button onClick={this.checkInput}>Next</button></span>
                    </div>

                </form>

                <div className="right_container">
                    <img src={logo} style={{ height: 256 }} alt="Signup logo" />
                    <div style={{ width: '250px', opacity: 0.6 }}>One account. All of Fundoo working for you.</div>
                </div>
            </div>

        )
    }
}
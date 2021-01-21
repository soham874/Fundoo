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

    //receives flag status and field value and updates arrays accordingly
    handleCallback = (inputString) => {
        return inputString
    }

    // handleChange = (e) => {
    //     this.setState({[e.target.name] : e.target.value})
    // }

    //analyses flag array on form submission
    checkInput = (e) => {
        inputValues = []
        e.preventDefault();

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

        if (inputValues.length === inputArray.length){
            alert("chesk suceeded, do next task")
        }
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
                        <TextInput label="Password" ref={this.state.password} parentCallback={this.handleCallback} />
                        <TextInput label="Confirm" ref={this.state.confirm} parentCallback={this.handleCallback} />
                    </div>
                    <div className="password_text">Use 8 or more charecters with a mix of letters, numbers and symbols</div>
                    <div>
                        <Checkbox></Checkbox>
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
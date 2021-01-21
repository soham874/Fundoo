import React from 'react'
import { TextInput } from '../InputField/inputFields'
import logo from '../../Assets/account.svg'
import './registration.css'
import {Link} from 'react-router-dom'
import { Checkbox } from '@material-ui/core'

let flagArray = [0, 0, 0, 0]            //0 for error, 1 for correct
let inputValues = ["", "", "", ""]      //corresponding field values

export default class registrationForm extends React.Component {
    // constructor(props){
    //     super(props)
    //     this.state={
    //         firstName : ''
    //     }
    // }

    //receives flag status and field value and updates arrays accordingly
    handleCallback = (errorFlag, inputString) => {
        let patternNo = Math.floor(errorFlag / 10)
        let flagInfo = errorFlag % 10
        flagArray[patternNo - 1] = flagInfo
        inputValues[patternNo - 1] = inputString
    }

    // handleChange = (e) => {
    //     this.setState({[e.target.name] : e.target.value})
    // }

    //analyses flag array on form submission
    checkInput = () => {
        let mainFlag = flagArray.findIndex(flag => flagArray[flag] === 0)

        if (mainFlag === -1) {
            //to do if all patterns match
            
        } else {
            //to do if there is error in input
            TextInput.changeHandler()
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
                        <TextInput label="First Name" id="firstName" state={this.state} pattern="1" parentCallback={this.handleCallback} />
                        <TextInput label="Last Name" id="lastName" pattern="2" parentCallback={this.handleCallback} />
                    </div>

                    <TextInput label="Username" id="userName" pattern="3" parentCallback={this.handleCallback} />
                    <div className="password_text">You can use letters, number & periods</div>

                    <div className="password_fields_container">
                        <TextInput label="Password" id="password" type="password" pattern="4" parentCallback={this.handleCallback} />
                        <TextInput label="Confirm" id="confirm" type="password" pattern="4" parentCallback={this.handleCallback} />
                    </div>
                    <div className="password_text">Use 8 or more charecters with a mix of letters, numbers and symbols</div>
                    <div>
                        <Checkbox></Checkbox>
                        <span className="password_text" style={{padding:0}}>Show Password</span>
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
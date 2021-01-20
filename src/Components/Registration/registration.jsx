import React from 'react'
import { TextInput } from '../InputField/inputFields'
import logo from '../../Assets/account.svg'

let flagArray = [ 0 , 0 , 0 , 0]

export default class registrationForm extends React.Component {

    handleCallback = (childData) => {
        let patternNo = Math.floor(childData / 10)
        let flagInfo = childData % 10
        flagArray[patternNo - 1] = flagInfo
    }

    checkInput = () => {
        let mainFlag = flagArray.findIndex(flag => flagArray[flag] === 0)

        if(mainFlag === -1)
            alert("All information is acceptable")
        else
            alert("Please try again")
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
                        <TextInput label="First Name" id="firstName"  pattern="1" parentCallback = {this.handleCallback}/>
                        <TextInput label="Last Name" id="lastName"  pattern="2" parentCallback = {this.handleCallback}/>
                    </div>

                    <TextInput label="Username" id="userName" pattern="3" parentCallback = {this.handleCallback}/>
                    <div className="password_text">You can use letters, number & periods</div>

                    <div className="password_fields_container">
                        <TextInput label="Password" id="password" type="password" pattern="4" parentCallback = {this.handleCallback}/>
                        <TextInput label="Confirm" id="confirm" type="password" pattern="4" parentCallback = {this.handleCallback}/>
                    </div>
                    <div className="password_text">Use 8 or more charecters with a mix of letters, numbers and symbols</div>
                    
                    <div className="options">
                        <span><a href="http://localhost:3000/" className="link">Sign in instead</a></span>
                        <span><button type="submit" onClick={this.checkInput}>Next</button></span>
                    </div>
                </form>

                <div className="right_container">
                    <img src={logo} style={{ height: 256 }} alt="Signup logo"/>
                    <div style={{ width: '250px', opacity: 0.6 }}>One account. All of Fundoo working for you.</div>
                </div>
            </div>

        )
    }
}
import React from 'react'
import { TextInput } from '../InputField/inputFields'
import logo from '../../Assets/account.svg'

export default class registrationForm extends React.Component {

    checkInput = () => {


        alert("next acceprted")
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
                        <TextInput label="First Name" id="firstName"  pattern="1"/>
                        <TextInput label="Last Name" id="lastName"  pattern="2"/>
                    </div>

                    <TextInput label="Username" id="userName" pattern="3"/>
                    <div className="password_text">You can use letters, number & periods</div>

                    <div className="password_fields_container">
                        <TextInput label="Password" id="password" type="password" pattern="4"/>
                        <TextInput label="Confirm" id="confirm" type="password" pattern="4"/>
                    </div>
                    <div className="password_text">Use 8 or more charecters with a mix of letters, numbers and symbols</div>
                    
                    <div className="options">
                        <span><a href="http://localhost:3000/" className="link">Sign in instead</a></span>
                        <span><button onClick={this.checkInput}>Next</button></span>
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
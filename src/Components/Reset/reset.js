import React from 'react'
import { TextInput } from '../InputField/inputFields'
import '../Login/login.css'
import '../Registration/registration.css'
import { Link } from 'react-router-dom'
import UserServices from '../../services/userService'

const userServices = new UserServices()

export default class loginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: React.createRef(),
        }
    }

    handleCallback = (inputString) => {
        return inputString
    }

    checkInput = (e) => {
        e.preventDefault();
        let password = this.state.password.current.returnValue()
        let username = this.state.userName.current.returnValue()

        if (password.length === 0 || username.length === 0) {
            if (password.length === 0)
                this.state.password.current.setFieldEmpty("Password")
            if (username.length === 0)
                this.state.userName.current.setFieldEmpty("Username")
        } else {
            let data = {
                "email": username,
                "password": password
            }
            userServices.login(data).then((response) => { 
                console.log(response) 
            }).catch((error) => { 
                this.state.password.current.setCustomError("Invald username/password")
                console.log(error)
            })
        }
    }

    render() {
        return (
            <form className="loginFormback">
                <div className="independet_text" style={{ textAlign: 'center' }}>
                    <b><span style={{ color: "#4285F4" }}>F</span>
                        <span style={{ color: "#DB4437" }}>u</span>
                        <span style={{ color: "#F4B400" }}>n</span>
                        <span style={{ color: "#4285F4" }}>d</span>
                        <span style={{ color: "#0F9D58" }}>o</span>
                        <span style={{ color: "#DB4437" }}>o</span></b>
                    <p>Reset your Fundoo account password</p>
                </div>

                <TextInput label="Email" ref={this.state.userName} parentCallback={this.handleCallback} />

                <div className="options">
                    <Link to="/login" className="link"><div>Go back to login</div></Link>
                    <span><button onClick={this.checkInput}>Send reset link</button></span>
                </div>
            </form>

        )
    }
}
import React from 'react'
import { TextInput } from '../InputField/inputFields'
import '../Registration/registration.css'
import { Checkbox } from '@material-ui/core'
import UserServices from '../../services/userService'
import SimpleSnackbar from '../Snackbar/snackbarMessages'

const userServices = new UserServices()

const patternPassword = RegExp('(?=.*[A-Z])(?=.*[0-9])(?=[^.,:;!@#$%^&*_+=]*[.,:;!@#$%^&*_+=][^.,:;!@#$%^&*_+=]*$).{8,}$')

export default class resetForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            confirm: React.createRef(),
            password: React.createRef(),
        }
    }

    handleCallback = (inputString) => {
        return inputString
    }

    //toggles visibility of password box
    toggleVisibility = () => {
        this.state.password.current.togglePassword()
        this.state.confirm.current.togglePassword()
    }

    //verifies password validity and resets
    checkInput = (e) => {
        e.preventDefault();
        let token = this.props.match.params.id
        let password = this.state.password.current.returnValue()
        let confirm = this.state.confirm.current.returnValue()

        if(!patternPassword.test(password))
            this.state.password.current.setCustomError("Password is invalid")

        if(password.length === 0)
            this.state.password.current.setCustomError("Password cannot be empty")

        if (password !== confirm || confirm.length === 0 || !patternPassword.test(password)) {
            this.state.confirm.current.setCustomError("Passwords donot match")
            return 
        }

        let data={
            "newPassword":password
        }

        userServices.resetPassword(data,token).then((response) => {
            console.log(response)
            SimpleSnackbar.handleClick("Password has been reset successfully")
            setTimeout(() => {
                this.props.history.push("/login")
            }, 3000)
        }).catch((error) => {
            SimpleSnackbar.handleClick("Password reset failed")
            console.log(error)
        })
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

                <TextInput label="New password" type="password" ref={this.state.password} parentCallback={this.handleCallback} />

                <TextInput label="Confirm" type="password" ref={this.state.confirm} parentCallback={this.handleCallback} />

                <div>
                    <Checkbox onClick={this.toggleVisibility}></Checkbox>
                    <span className="password_text" style={{ padding: 0 }}>Show Password</span>
                </div>

                <div className="options">
                    <span><button onClick={this.checkInput}>Login</button></span>
                </div>
                <SimpleSnackbar/>
            </form>

        )
    }
}
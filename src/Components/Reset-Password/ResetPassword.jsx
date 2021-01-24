import React from 'react'
import { TextInput } from '../InputField/inputFields'
import '../Registration/registration.css'
import { Checkbox } from '@material-ui/core'
import UserServices from '../../services/userService'
import SimpleSnackbar from '../Snackbar/snackbarMessages'

const userServices = new UserServices()

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
    }

    checkInput = (e) => {
        e.preventDefault();
        let token = this.props.match.params.id
        let password = this.state.password.current.returnValue()
        // let confirm = this.state.confirm.current.returnValue()

        // let data = new FormData()
        // data.set('newPassword',password)

        let data={
            "newPassword":password
        }

        userServices.resetPassword(data,token).then((response) => {
            console.log(response)
            SimpleSnackbar.handleClick("Reset link sent successfully")
            // setTimeout(() => {
            //     this.props.history.push("/login")
            // }, 4000)
        }).catch((error) => {
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

                <TextInput label="New password" ref={this.state.password} parentCallback={this.handleCallback} />

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
import React from 'react'
import { TextInput } from '../InputField/inputFields'
import { Link } from 'react-router-dom'
import { Checkbox } from '@material-ui/core'
import UserServices from '../../services/userService'
import SimpleSnackbar from '../Snackbar/snackbarMessages'

const userServices = new UserServices()

export default class loginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: React.createRef(),
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
                localStorage.setItem('userId',response.data.id)
                SimpleSnackbar.handleClick("Login successful")
                setTimeout(() => {
                    this.props.history.push("/dashboard")
                }, 3000)
            }).catch((error) => {
                SimpleSnackbar.handleClick("Invald username/password")
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
                    <p>Sign In your Fundoo account</p>
                </div>

                <TextInput label="Email" ref={this.state.userName} parentCallback={this.handleCallback} />

                <TextInput label="Password" type="password" ref={this.state.password} parentCallback={this.handleCallback} />

                <div>
                    <Checkbox onClick={this.toggleVisibility}></Checkbox>
                    <span className="password_text" style={{ padding: 0 }}>Show Password</span>
                </div>

                <div className="options" style={{ marginTop: 0 }}><Link to="/forgot-password" className="link">Forgot Password?</Link></div>

                <div className="options">
                    <Link to="/registration" className="link"><div>Create a new account</div></Link>
                    <span><button onClick={this.checkInput}>Login</button></span>
                </div>
                <SimpleSnackbar/>
            </form>

        )
    }
}
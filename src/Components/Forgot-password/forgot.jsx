import React from 'react'
import { TextInput } from '../InputField/inputFields'
import '../Login/login.css'
import '../Registration/registration.css'
import { Link } from 'react-router-dom'
import UserServices from '../../services/userService'
import SimpleSnackbar from '../Snackbar/snackbarMessages'

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
        let username = this.state.userName.current.returnValue()

        if (username.length === 0)
            this.state.userName.current.setFieldEmpty("Email")
        else {
            let data = {
                "email": username
            }

            userServices.resetEmail(data).then((response) => {
                console.log(response)
                this.state.userName.current.resetField()
                SimpleSnackbar.handleClick("Reset link sent successfully")
                setTimeout(() => {
                    this.props.history.push("/login")
                }, 3000)
            }).catch((error) => {
                this.state.userName.current.setCustomError("Email doesnot exist in database")
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
                    <p>Use registered email to reset your Fundoo account password</p>
                </div>

                <TextInput label="Email" ref={this.state.userName} parentCallback={this.handleCallback} />

                <div className="options">
                    <Link to="/login" className="link"><div>Go back to login</div></Link>
                    <span><button onClick={this.checkInput}>Send reset link</button></span>
                </div>
                <SimpleSnackbar/>
            </form>

        )
    }
}
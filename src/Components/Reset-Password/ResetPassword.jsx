import React from 'react'
import { TextInput } from '../InputField/inputFields'
import '../Registration/registration.css'
import { Checkbox } from '@material-ui/core'
import UserServices from '../../services/userService'
import SimpleSnackbar from '../Snackbar/snackbarMessages'

const userServices = new UserServices()

const patternPassword = RegExp('(?=.*[A-Z])(?=.*[0-9])(?=[^.,:;!@#$%^&*_+=]*[.,:;!@#$%^&*_+=][^.,:;!@#$%^&*_+=]*$).{8,}$')

export default function ResetForm(props) {
    const [state] = React.useState({
        confirm: React.createRef(),
        password: React.createRef()
    });


    const handleCallback = (inputString) => {
        return inputString
    }

    //toggles visibility of password box
    const toggleVisibility = () => {
        state.password.current.togglePassword()
        state.confirm.current.togglePassword()
    }

    //verifies password validity and resets
    const checkInput = (e) => {
        e.preventDefault();
        let token = props.match.params.id
        let password = state.password.current.returnValue()
        let confirm = state.confirm.current.returnValue()

        if (!patternPassword.test(password))
            state.password.current.setCustomError("Password is invalid")

        if (password.length === 0)
            state.password.current.setCustomError("Password cannot be empty")

        if (password !== confirm || confirm.length === 0 || !patternPassword.test(password)) {
            state.confirm.current.setCustomError("Passwords donot match")
            return
        }

        let data = {
            "newPassword": password
        }

        userServices.resetPassword(data, token).then((response) => {
            console.log(response)
            SimpleSnackbar.handleClick("Password has been reset successfully")
            setTimeout(() => {
                props.history.push("/login")
            }, 3000)
        }).catch((error) => {
            SimpleSnackbar.handleClick("Password reset failed")
            console.log(error)
        })
    }

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

            <TextInput label="New password" type="password" ref={state.password} parentCallback={handleCallback} />

            <TextInput label="Confirm" type="password" ref={state.confirm} parentCallback={handleCallback} />

            <div>
                <Checkbox onClick={toggleVisibility}></Checkbox>
                <span className="password_text" style={{ padding: 0 }}>Show Password</span>
            </div>

            <div className="options">
                <span><button onClick={checkInput}>Login</button></span>
            </div>
            <SimpleSnackbar />
        </form>
    )

}
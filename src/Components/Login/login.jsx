import React from 'react'
import { TextInput } from '../InputField/inputFields'
import './login.css'

let flagArray = [0, 0, 0, 0]

export default class registrationForm extends React.Component {

    handleCallback = (childData) => {
        let patternNo = Math.floor(childData / 10)
        let flagInfo = childData % 10
        flagArray[patternNo - 1] = flagInfo
    }

    checkInput = () => {
        let mainFlag = flagArray.findIndex(flag => flagArray[flag] === 0)

        if (mainFlag === -1)
            alert("All information is acceptable")
        else
            alert("Please try again")
    }

    render() {
        return (

            <form className="loginFormback">

                    <div className="independet_text" style={{textAlign:'center'}}>
                        <b><span style={{ color: "#4285F4" }}>F</span>
                            <span style={{ color: "#DB4437" }}>u</span>
                            <span style={{ color: "#F4B400" }}>n</span>
                            <span style={{ color: "#4285F4" }}>d</span>
                            <span style={{ color: "#0F9D58" }}>o</span>
                            <span style={{ color: "#DB4437" }}>o</span></b>
                            <p>Sign In your Fundoo account</p>
                    </div>
                    

                    <TextInput label="Username" pattern ="3"/>

                    <TextInput label="Password" type="password" pattern ="4"/>

                    <div className="options">
                        <span><a href="http://localhost:3000/" className="link">Create a new account</a></span>
                        <span><button type="submit" onClick={this.checkInput}>Next</button></span>
                    </div>
                    
            </form>

        )
    }
}
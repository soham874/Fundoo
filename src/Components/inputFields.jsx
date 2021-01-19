import React from 'react'
import { TextField } from '@material-ui/core'
import './Registration/registration.css'

//regex patterns
const patternFirstName = RegExp('^[A-Z][a-z]{2,}$')         //1
const patternLastName = RegExp('^[A-Z][a-z]{2,}$')          //2
const patternPassword = RegExp('(?=.*[A-Z])(?=.*[0-9])(?=[^.,:;!@#$%^&*_+=]*[.,:;!@#$%^&*_+=][^.,:;!@#$%^&*_+=]*$).{8,}$')

const regexArray = [patternFirstName, patternLastName, patternLastName, patternPassword]
const inputArray = ["First name", "Last name", "Username", "Password"]

let validFlag

// Text input component
class TextInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            //field properties from parent
            id: this.props.id,
            label: this.props.label,
            helperText: this.props.helperText,
            type: this.props.type,
            error: false,

            //pattern number for which verification is needed
            pattern: this.props.pattern
        }
    }

    changeHandler = (e) => {
        let inputString = e.target.value
        validFlag = regexArray[this.state.pattern-1].test(inputString)
        this.setState({helperText : this.props.helperText, error : false})
        console.log(validFlag)
        if(!validFlag)
            this.setState({helperText : `${inputArray[this.state.pattern-1]} not matching pattern`,error : true})
    }

    render() {
        return (
            <div className="formField">
                <TextField
                    margin="dense"
                    id={this.state.id}
                    label={this.state.label}
                    helperText={this.state.helperText}
                    fullWidth
                    type={this.state.type}
                    onChange={this.changeHandler}
                    error={this.state.error}
                    variant="outlined"
                />
            </div>
        )
    }
}

export { TextInput }
import React from 'react'
import { TextField } from '@material-ui/core'
import '../Registration/registration.css'

//regex patterns
const patternFirstName = RegExp('^[A-Z][a-z]{2,}$')         //1
const patternLastName = RegExp('^[A-Z][a-z]{2,}$')          //2
const patternPassword = RegExp('(?=.*[A-Z])(?=.*[0-9])(?=[^.,:;!@#$%^&*_+=]*[.,:;!@#$%^&*_+=][^.,:;!@#$%^&*_+=]*$).{8,}$')

const regexArray = [patternFirstName, patternLastName, patternLastName, patternPassword]
const inputArray = ["First name", "Last name", "Username", "Password"]

let intFlag

// Text input component
class TextInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            //dynamic field properties
            helperText: " ",
            error: false,
            type: "text",

            //pattern number for which verification is needed
            pattern: this.props.pattern,
        }
    }

    //returns verification flag status and field value to parent on change
    changeHandler = (e) => {
        let inputString = e.target.value
        let validFlag = regexArray[this.state.pattern - 1].test(inputString)

        intFlag = this.props.pattern * 10 + 1

        this.setState({ helperText: " ", error: false })
        if (!validFlag){
            intFlag = this.props.pattern * 10
            this.setState({error: true })
            if (inputString.length === 0)
                this.setState({ helperText: `${inputArray[this.state.pattern - 1]} cannot be empty`})
            else
                this.setState({ helperText: `${inputArray[this.state.pattern - 1]} is invalid`})
        }
        if(this.props.parentCallback != null)
            this.props.parentCallback(intFlag,e.target.value)
    }

    setFieldError = (fieldname) => {
        this.setState({ helperText: `${fieldname} is invalid` , error: true })
    }

    setFieldEmpty = (fieldname) => {
        this.setState({ helperText: `${fieldname} cannot be empty` , error: true })
    }

    togglePassword = (flag) => {
        this.setState({type : "text"})
        if(flag === 1)
            this.setState({type : "password"})
    }

    render() {
        return (
            <div className="formField">
                <TextField
                    autoComplete="off"
                    margin="dense"
                    id={this.props.id}
                    label={this.props.label}
                    helperText={this.state.helperText}
                    fullWidth
                    type={this.state.type}
                    error={this.state.error}
                    variant="outlined"
                />
            </div>
        )
    }
}

export { TextInput }
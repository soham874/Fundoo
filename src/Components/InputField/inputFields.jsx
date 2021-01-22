import React from 'react'
import { TextField } from '@material-ui/core'
import '../Registration/registration.css'

// Text input component
class TextInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            //dynamic field properties
            helperText: " ",
            error: false,
            type: this.props.type,
            value: '',
        }
    }

    //resets errors on text field
    resetErrors = (e) => {
        this.setState({ helperText: " ", error: false, value: e.target.value })
    }

    //returns field value to parent
    returnValue = () => {
        return this.props.parentCallback(this.state.value)
    }

    //sets the field to an error
    setFieldError = (fieldname) => {
        this.setState({ helperText: `${fieldname} is invalid`, error: true })
    }

    //sets the field to a custom error
    setCustomMessage = (message) => {
        this.setState({ helperText: `${message}` })
    }

    //sets the field to a custom error
    setCustomError = (error) => {
        this.setState({ helperText: `${error}`, error: true })
    }

    //sets the field to empty error
    setFieldEmpty = (fieldname) => {
        this.setState({ helperText: `${fieldname} cannot be empty`, error: true })
    }

    //toggles password visibility based on flag. 1 for invisible
    togglePassword = () => {
        if (this.state.type === "text")
            this.setState({ type: "password" })
        else
            this.setState({ type: "text" })
    }

    //renders the textfield
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
                    onChange={this.resetErrors}
                    type={this.state.type}
                    error={this.state.error}
                    variant="outlined"
                />
            </div>
        )
    }
}

export { TextInput }
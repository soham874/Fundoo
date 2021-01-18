import React from 'react'
import { TextField } from '@material-ui/core'
import './registration.css'

// Text input component
class TextInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id : this.props.id,
            label : this.props.label,
            helperText: this.props.helperText,
            width: this.props.width,
            type: this.props.type
        }
    }
    render() {
        return (
            <div className="formField">
                <TextField 
                    margin = "dense"
                    id = {this.state.id}
                    label = {this.state.label}
                    helperText = {this.state.helperText}
                    width = {this.state.width}
                    fullWidth
                    type = {this.state.type}
                    variant ="outlined"
                />
            </div>
        )
    }
}

export { TextInput }
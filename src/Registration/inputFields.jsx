import React from 'react'
import { TextField } from '@material-ui/core'
import './registration.css'

// Text input component
class TextInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id : this.props.id,
            label : this.props.label
        }
    }
    render() {
        return (
            <div className="formField">
                <TextField 
                    id = {this.state.id}
                    label = {this.state.label}
                    type="text"
                    variant="outlined"
                />
            </div>
        )
    }
}

// Number input component
class NumberInput extends React.Component {
    render() {
        return (
            <div className="formField">
                <TextField
                    type="number"
                    variant="outlined"
                />
            </div>
        )
    }
}

export { TextInput, NumberInput }
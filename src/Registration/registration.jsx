import React from 'react'
import {TextInput} from './inputFields'

// Text input component
export default class registrationForm extends React.Component {
    render() {
        return(
            <form> 
                FUNDOO
                <TextInput label="First Name" id="firstName"/>
                <TextInput label="Last Name" id="lastName"/>
            </form>
        )
    }
}
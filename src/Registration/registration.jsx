import React from 'react'
import {TextInput,NumberInput} from './inputFields'

// Text input component
export default class registrationForm extends React.Component {
    render() {
        return(
            <form> 
                <TextInput/>
                <NumberInput/>
            </form>
        )
    }
}
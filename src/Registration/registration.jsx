import React from 'react'
import { TextInput } from './inputFields'

// Text input component
export default class registrationForm extends React.Component {
    render() {
        return (

            <div class="formback">
                <form class="left_container">
                    <div class="independet_text">
                        <b><span style={{color: "#4285F4"}}>F</span>
                        <span style={{color: "#DB4437"}}>u</span>
                        <span style={{color: "#F4B400"}}>n</span>
                        <span style={{color: "#4285F4"}}>d</span>
                        <span style={{color: "#0F9D58"}}>o</span>
                        <span style={{color: "#DB4437"}}>o</span></b>
                    </div>
                    <div class="independet_text">Create Your Fundoo account</div>

                    <div class="name_field_containers">
                        <TextInput label="First Name" id="firstName" />
                        <TextInput label="Last Name" id="lastName" />
                    </div>

                    <TextInput label="Username" id="userName" helperText="You can use letters, number & periods" width="500px" />

                    <div class="password_fields_container">
                        <TextInput label="Password" id="password" type="password" helperText="Use 8 or more charecters with a mix of letters, numbers and symbols" />
                        <TextInput label="Confirm" id="confirm" type="password" />
                    </div>

                </form>
            </div>

        )
    }
}
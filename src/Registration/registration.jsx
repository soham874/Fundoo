import React from 'react'
import { TextInput } from './inputFields'

// Text input component
export default class registrationForm extends React.Component {
    render() {
        return (

            <div class="formback">
                <form class="left_container">

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
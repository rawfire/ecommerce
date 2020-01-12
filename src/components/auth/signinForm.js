import React, {Component} from "react";

import { reduxForm, Field } from "redux-form";

import {FormInput} from "../formFields";

class SignInForm extends Component {
    render() {
        const { className } = this.props;
        return(
            <form className={`${className} sign-in-form`}>
                <Field className="sign-in-form__email" type="email" title="E-Mail" placeholder="e-mail" name="email" component={FormInput}/>
                <Field className="sign-in-form__password" type="password" title="Password" placeholder="password" name="password" component={FormInput}/>

            </form>
        )
    }
}
SignInForm = reduxForm({
    form: "SignInForm"
})(SignInForm);

export default SignInForm;
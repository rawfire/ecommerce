import React, {Component} from "react";

import { reduxForm, Field } from "redux-form";

import {FormInput, FormButton} from "../formFields";
import Details from "../details";

import history from "../../history";

class SignUpForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        const info = [
            {
                _id: 0,
                title: "At least six characters"
            },
            {
                _id: 1,
                title: "At least one number"
            },
            {
                _id: 2,
                title: "At least one symbol"
            }
        ]
        return(
            <form onSubmit={handleSubmit} className={`${className} sign-up-form`}>
                <Field className="sign-up-form__name" type="name" title="Name" placeholder="name" name="name" component={FormInput}/>
                <Field className="sign-up-form__email" type="email" title="E-Mail" placeholder="e-mail" name="email" component={FormInput}/>
                <Field className="sign-up-form__password" type="password" title="Password" placeholder="password" name="password" component={FormInput}/>
                <Field className="sign-up-form__confirm" type="password" title="Confirn Password" placeholder="confirm password" name="confirm" component={FormInput}/>


                <div className="sign-up-form__line"></div>
                <Field className="sign-up-form__login" onClick={() => history.push("/account")} type="submit" title="Create Account" name="login" component={FormButton}/>
                <Field className="sign-up-form__back" onClick={() => history.push("/signin")} type="button" short={true} title="back" name="back" component={FormButton}/>
                <Details className="sign-up-form__details" title="Password Requirements" info={info}/>
            </form>
        )
    }
}
SignUpForm = reduxForm({
    form: "SignUpForm"
})(SignUpForm);

export default SignUpForm;
import React, {Component} from "react";

import { reduxForm, Field } from "redux-form";

import {FormInput, FormButton} from "../formFields";
import Details from "../details";

import history from "../../history";

class SignUpForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        const links = [
            {
                _id: 0,
                title: "Not Registered Create Account Here",
                onClick: () => history.push("./signup")
            },
            {
                _id: 1,
                title: "Forgot Account e-mail",
                onClick: () => console.log("forgot email")
            },
            {
                _id: 2,
                title: "Forgot Password",
                onClick: () => console.log("forgot password")
            }
        ]
        return(
            <form onSubmit={handleSubmit} className={`${className} sign-up-form`}>
                <Field className="sign-up-form__name" type="name" title="Name" placeholder="name" name="name" component={FormInput}/>
                <Field className="sign-up-form__email" type="email" title="E-Mail" placeholder="e-mail" name="email" component={FormInput}/>
                <Field className="sign-up-form__password" type="password" title="Password" placeholder="password" name="password" component={FormInput}/>
                <Field className="sign-up-form__confirn-password" type="password" title="Confirn Password" placeholder="confirm password" name="confirm" component={FormInput}/>


                <div className="sign-up-form__line"></div>
                <Field className="sign-up-form__login" onClick={() => console.log("submit")} type="submit" title="Login" name="login" component={FormButton}/>
                <Field className="sign-up-form__back" onClick={() => console.log("go back")} type="button" short={true} title="back" name="back" component={FormButton}/>
                <Details className="sign-up-form__details" title="QuickLinks" links={links}/>
            </form>
        )
    }
}
SignUpForm = reduxForm({
    form: "SignUpForm"
})(SignUpForm);

export default SignUpForm;
import React, {Component} from "react";

import { reduxForm, Field } from "redux-form";

import {FormInput, FormButton} from "../formFields";
import Details from "../details";

import history from "../../history";

class ReviewForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        
        return(
            <form onSubmit={handleSubmit} className={`${className} sign-up-form`}>
               

                <div className="sign-up-form__line"></div>
                <Field className="sign-up-form__login" onClick={() => history.push("/account")} type="submit" title="Create Account" name="login" component={FormButton}/>
                <Field className="sign-up-form__back" onClick={() => history.push("/signin")} type="button" short={true} title="back" name="back" component={FormButton}/>
            </form>
        )
    }
}
ReviewForm = reduxForm({
    form: "ReviewForm"
})(ReviewForm);

export default ReviewForm;
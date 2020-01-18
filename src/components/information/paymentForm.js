import React, {Component} from "react";

import { reduxForm, Field } from "redux-form";

import {FormInput, FormButton} from "../formFields";

import history from "../../history";

import OrderSummary from "./orderSummary";
import { UnderlineTitle } from "./infoHelp";

class PaymentForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        
        return(
            <form onSubmit={handleSubmit} className={`${className} payment-form`}>
                <Field className="payment-form__name" type="Name on Credit Card" title="Name" placeholder="name" name="name" component={FormInput}/>
                <Field className="payment-form__card" type="card" title="Credit Card Number" placeholder="____-____-____-____" name="card" component={FormInput}/>
                <Field className="payment-form__ccv" type="ccv" title="CCV" placeholder="CCV" name="ccv" component={FormInput}/>
                <Field className="payment-form__expiration" type="expiration" title="Expiration Date" placeholder="MM/YYYY" name="expiration" component={FormInput}/>


                <div className="payment-form__line"></div>
                <Field className="payment-form__back" onClick={() => history.push("/signin")} type="button" short={true} title="back" name="back" component={FormButton}/>
                <Field className="payment-form__pay-complete" onClick={() => history.push("/account")} type="payment" title="Pay and Complete Order" name="Pay and Complete Order" component={FormButton}/>
                <OrderSummary className="payment-form__order-summary" />
                <div className="payment-form__shipping-info shipping-info">
                    <UnderlineTitle className="shipping-info__title" title="Shipping To" />
                    <div className="shipping-info__name small-text"> Jordan Hudens </div>
                    <div className="shipping-info__address small-text"> 123 Main St </div>

                </div>
            </form>
        )
    }
}
PaymentForm = reduxForm({
    form: "PaymentForm"
})(PaymentForm);

export default PaymentForm;
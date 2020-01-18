import React, {Component} from "react";

import {UnderlineTitle, InfoTitle} from "./infoHelp";

import {connect} from "react-redux"
class OrderSummary extends Component {
    render() {
        const {className} = this.props;
        let subtotal = 0;
        let tax = 0.15;
        let amountStickers = 0;
        this.props.cartProducts.map(cartProduct => {
            subtotal += cartProduct.quantity *cartProduct.product.price;
            amountStickers += cartProduct.quantity;
        })
        return(
            <div className={`${className} order-summary`}>
                <UnderlineTitle className="order-summary__title" title="Order Summary"/>
                <InfoTitle className="order-summary__subtotal" title={`${amountStickers} stickers`} value={`$${subtotal}`} />
                <InfoTitle className="order-summary__tax-shipping" title="Taxes & Shipping" value={`$${tax}`} />
                <InfoTitle className="order-summary__total info-title-green" title="Total" value={`$${subtotal + tax}`} />
            </div>
        )
    }
}

function mapStateToprops(state){
    const {cartProducts} = state.user;
    return {cartProducts}
}

OrderSummary = connect(mapStateToprops)(OrderSummary);

export default OrderSummary;
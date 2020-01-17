import React, {Component} from "react";

import {UnderlineTitle, InfoTitle} from "./infoHelp";

class OrderSummary extends Component {
    render() {
        const {className} = this.props;
        return(
            <div className={`${className} order-summary`}>
                <UnderlineTitle className="order-summary__title"/>
                <InfoTitle className="order-summary__subtotal" title="4 stickers" value="$7.96" />
                <InfoTitle className="order-summary__tax-shipping" title="Taxes & Shipping" value="$2.96" />
                <InfoTitle className="order-summary__total" title="Total" value="$9.02" />
            </div>
        )
    }
}

export default OrderSummary;
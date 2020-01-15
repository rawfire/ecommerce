import React, {Component} from "react";
import {connect} from "react-redux";
import * as actions from "../../actions";

class Shop extends Component {
    componentDidMount() {
        const headerLinks = [
            {
                _id: 0,
                title: "Login",
                path: "/signin" 
            }          
        ]
        this.props.setHeaderLinks(headerLinks);
        this.props.fetchShopCategories();
        this.props.fetchShopProducts();
        // filter products with links 
         // fetch shop products
    }
    render() {
        return(
            <div className="shop">
                {/* SHOP SEARCH BAR COMPONENT  */}
                {/* SHOP PRODUCT COMPONENT */}
                {/* SHOP CART BUTTON  */}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return { state }
}
Shop = connect(mapStateToProps, actions)(Shop);
export default Shop;
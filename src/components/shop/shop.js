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

    shouldComponentUpdate(nextProps) {
        if(this.props!= nextProps) {
            this.props.setNavbarLinks(nextProps.categories, (_id) => this.props.filterProductsWithCategoryId(_id));
        }
        return true
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
    const { categories } = state.shop;
    return { 
        categories
    }
}
Shop = connect(mapStateToProps, actions)(Shop);
export default Shop;
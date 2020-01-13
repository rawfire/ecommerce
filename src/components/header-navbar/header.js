import React, {Component} from "react";
import {connect} from "react-redux";

class Header extends Component {
    render() {
        return(
            <div className="header">
                <img src="http://via.placeholder.com/50x50"/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const{ headerLinks } = state.headerNavbar;
    return {
        headerLinks
    }
}

Header = connect(mapStateToProps)(Header);
export default Header;
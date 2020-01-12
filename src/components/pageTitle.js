import React, {Component} from "react";

class pageTitle extends Component {

    render() {
        const {className, title} = this.props;
        return(
            <div className={`${className} page-title`}>{title}</div>
        )
    }
}


export default pageTitle;
import React, { Component } from 'react';

import Navbar from "./header-navbar/navbar";
import Header from "./header-navbar/header";

class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        {this.props.children}
        <Header/>
        <Navbar/>
      </div>
    );
  }
}

export default Layout;
import React from "react";
import './Header.css'


class Header extends React.Component {
    render(){
       return (
       <div className = "header">
           <div className="innerHeader">
                <div className="logoContainer">
                    <h2>ShoppingCart</h2>
                </div>
                <div className = "cartContainer">
                    <h4>Cart 0</h4>
                </div>
           </div>

        </div>
    )
    }
}


export default Header;
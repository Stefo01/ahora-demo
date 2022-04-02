import React from "react";

import HeaderCartButton from "./HeaderCartButton";
import './Header.css';


const Header = props => {
    return (
        <React.Fragment>
            <header className="header-Header">
                <h2>Tavolo 52</h2>
                <HeaderCartButton onClick1={props.onShowCart}></HeaderCartButton>
            </header>
            <div className='main-image-header'>
                <img className='main-image-Header_img' src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg" alt='A table of delicius food!'></img>
            </div>
        </React.Fragment>
    )
}

export default Header;
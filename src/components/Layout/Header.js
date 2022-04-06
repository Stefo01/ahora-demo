import React, { useContext } from "react";
import BusinessContext from "../../store/business-context";

import HeaderCartButton from "./HeaderCartButton";
import './Header.css';


const Header = props => {
    const businessCtx = useContext(BusinessContext);

    return (
        <React.Fragment>
            <header className="header-Header">
                <h2>Tavolo {businessCtx.table}</h2>
                <HeaderCartButton onClick1={props.onShowCart}></HeaderCartButton>
            </header>
            <div className='main-image-header'>
                <img className='main-image-Header_img' src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg" alt='A table of delicius food!'></img>
            </div>
        </React.Fragment>
    )
}

export default Header;
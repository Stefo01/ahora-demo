import React, { useContext, useEffect, useState } from "react";
import BusinessContext from "../../store/business-context";
import { storage } from "./../../firebaseConfig";
import { ref, getDownloadURL } from "firebase/storage";

import HeaderCartButton from "./HeaderCartButton";
import './Header.css';


const Header = props => {
    const businessCtx = useContext(BusinessContext);
    const [image, setImage] = useState(null);

    useEffect(() => {
        const pathReference = ref(storage, `${businessCtx.id}/cover.jpg`);
        getDownloadURL(pathReference).then(url => {
            setImage(url);
        })
    }, [businessCtx])


    return (
        <React.Fragment>
            <header className="header-Header">
                <h2>Tavolo {businessCtx.table}</h2>
                <HeaderCartButton onClick1={props.onShowCart}></HeaderCartButton>
            </header>
            <div className='main-image-header'>
                <img className='main-image-Header_img' src={image} alt='cover'></img>
            </div>
        </React.Fragment>
    )
}

export default Header;
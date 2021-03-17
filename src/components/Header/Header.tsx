import React from "react";
import './Header.css';
import logo from "../assets/images/logo.png";


interface HeaderProps {
    switchLanguage: switchLanguage;
}

export const Header: React.FC<HeaderProps> = ({ switchLanguage }) => {


    return (
        <nav>
            <img className="nav-logo" src={logo} alt="logo" />
            <div className="nav-languages-choice">
                <button onClick={switchLanguage} value="nl">nl</button>
                <button onClick={switchLanguage} value="fr">fr</button>
                <button onClick={switchLanguage} value="en">en</button>
            </div>
        </nav>
       
    )
}


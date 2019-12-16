import React from "react";
import "./header.css";

class Header extends React.Component{
    render(){
        return (
            <nav className="Nav">
                <div className="Nav-menus">
                    <a className="Nav-brand-logo" href="/"/>
                    <span className="Nav-brand-name">
                        SPIX (Social Photo Interface X)
                    </span>
                </div>
            </nav>
        );
    }
}
export default Header;
import { Navigation } from "../Navigation/Navigation";
import { Logo } from "../Logo/Logo";
import SiteLogo from "../../assets/logo/logo.svg";
import closeIcon from "../../assets/images/icons/circle-xmark-regular.svg";
import menuIcon from "../../assets/images/icons/bars-solid.svg";
import "./style.css";
import { Basket } from "../Basket/Basket";
import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Search } from "../Search/Search";

export const Header = () => {

    const [getMenuState, setMenuState] = useState<boolean>(false);

    const ref = useRef<HTMLInputElement>(null);

    function outsideClickHandler(e:Event) {
        e.preventDefault();
        if (ref.current && !ref.current.contains(e.target as HTMLButtonElement)) {
            setMenuState(false);
        } 
    }

    useEffect(() => {
        getMenuState && window.addEventListener("mousedown", outsideClickHandler);
        return (() => {
            window.removeEventListener("mousedown", outsideClickHandler);
        });
    });

    return (
        <header>
            <div className="top-bar">
                <div className="logo-section">
                    <div className="menu">
                        <span className="menu-trigger" onClick={() => setMenuState(!getMenuState)}><img src={menuIcon} width="24" height="24"/></span>
                    </div>
                    <NavLink to={"/"}><Logo LogoPath={SiteLogo} LogoWidth="130px" LogoHeight="40px" AltText="Site Logo"/></NavLink>
                </div>
                <div className="navigation-actions">
                    <Search />
                    <Basket />
                </div>  
            </div>
            <div ref={ref} className={getMenuState ? "menu-container active" : "menu-container"}>
                <div className="menu-actions"><span>Menu</span><span onClick={() => setMenuState(!getMenuState)}><img src={closeIcon} width="24" height="24"/></span></div>
                <Navigation SetMenuState={setMenuState}/>
            </div>
        </header>
    );
}
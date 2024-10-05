import { Navigation } from "../Navigation/Navigation";
import { Logo } from "../Logo/Logo";
import SiteLogo from "../../assets/logo/logo.svg";
import "./style.css";
import { Basket } from "../Basket/Basket";
import { useState, useEffect, useRef } from "react";

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
        window.addEventListener("mousedown", outsideClickHandler);
        return (() => {
            window.removeEventListener("mousedown", outsideClickHandler);
        });
    });

    return (
        <header>
            <div className="top-bar">
                <div className="logo-section">
                    <div className="menu">
                        <span className="menu-trigger" onClick={() => setMenuState(!getMenuState)}>#</span>
                    </div>
                    <Logo LogoPath={SiteLogo} LogoWidth="40px" LogoHeight="40px" AltText="Site Logo"/>
                </div>
                <div className="navigation-actions">
                    <Basket />
                </div>  
            </div>
            <div ref={ref} className={getMenuState ? "menu-container active" : "menu-container"}>
                <div className="menu-actions"><span onClick={() => setMenuState(!getMenuState)}>X</span></div>
                <Navigation SetMenuState={setMenuState}/>
            </div>
        </header>
    );
}
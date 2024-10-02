import { Navigation } from "../Navigation/Navigation";
import { Logo } from "../Logo/Logo";
import SiteLogo from "../../assets/logo/logo.svg";
import "./style.css";
import { Basket } from "../Basket/Basket";

export const Header = () => {
    return (
        <header>
            <div className="top-bar">
                <Logo LogoPath={SiteLogo} LogoWidth="100px" LogoHeight="50px" AltText="Site Logo"/>
                <div className="navigation-actions">
                    <input type="text" />
                    <Basket />
                </div>  
            </div>
            <div className="bottom-bar">
                <Navigation />
            </div>
        </header>
    );
}
import { Navigation } from "../Navigation/Navigation";
import { Logo } from "../Logo/Logo";
import SiteLogo from "../../../public/images/logo/logo.svg";
import "./style.css";

export const Header = () => {
    return (
        <header>
            <div className="top-bar">
                <Logo LogoPath={SiteLogo} LogoWidth="100px" LogoHeight="50px" AltText="Site Logo"/>
                <input type="text" />
            </div>
            <div className="bottom-bar">
                <Navigation />
            </div>
        </header>
    );
}
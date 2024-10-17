import "./style.css";
import { NavLink } from "react-router-dom";

export const Footer = () => {
    return (
        <footer>
            <div className="top-container">
                <div className="link-container">
                    <h4>Help</h4>
                    <ul>
                        <li><NavLink to={`/`}></NavLink>Contact Us</li>
                        <li><NavLink to={`/`}></NavLink>FAQ</li>
                        <li><NavLink to={`/`}></NavLink>Privacy</li>
                        <li><NavLink to={`/`}></NavLink>Terms of Service</li>
                        <li><NavLink to={`/`}></NavLink>Cookie Preferences</li>
                    </ul>
                </div>
                <div className="link-container">
                    <h4>About Us</h4>
                    <ul>
                        <li><NavLink to={`/`}></NavLink>Our Story</li>
                        <li><NavLink to={`/`}></NavLink>Careers</li>
                        <li><NavLink to={`/`}></NavLink>Sustainablity</li>
                    </ul>
                </div>
            </div>
            <div className="bottom-bar">
                <span>Ricky Goacher</span>
                <span>Built with Vite + React</span>
            </div>
        </footer>
    )
}
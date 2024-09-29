import { NavLink } from "react-router-dom";

export const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/Products">Products</NavLink></li>
                <li><NavLink to="Product">Product</NavLink></li>
            </ul>
        </nav>
    );
}
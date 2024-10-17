import { NavLink } from "react-router-dom";
import "./style.css";

interface CategoryTilesInterface {
    Tiles: Array<{
        image: string;
        link: string;
        title: string;
    }>
}

export const CategortTiles = ({Tiles}: CategoryTilesInterface) => {

    const GenerateTiles = Tiles.map(item => {
        return (
            <div key={Math.random()}className="tile">
                <NavLink to={item.link}>
                    <img src={item.image}/>
                    <div className="text-wrapper">
                        <h3>{item.title}</h3>
                    </div>
                    <div className="overlay"></div>
                </NavLink>
            </div>
        );
    });

    return (
        <div className="category-tiles">
            {GenerateTiles}
        </div>
    );
}
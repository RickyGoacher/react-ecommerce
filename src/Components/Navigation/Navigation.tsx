import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCategories } from "../../../data/ProductData";
import { CategoryDataInterface } from "../../../App.types.ts";
import "./style.css";

interface NavigationInterface {
    SetMenuState: (state:boolean) => void;
}

export const Navigation = ({ SetMenuState }:NavigationInterface) => {

    const [getCategoryData, setCategoryData] = useState<Array<CategoryDataInterface> | null>(null);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData () {
        let data = await getCategories();
        setCategoryData(data);
    }

    const GenerateCategoryLinks = getCategoryData?.map(item => {
        return (
            <li key={item.name} onClick={() => SetMenuState(false)}><NavLink to={`/products/${item.slug}`} >{item.name}</NavLink></li>
        );
    });

    return (
        <nav>
            <ul>
                {GenerateCategoryLinks}
            </ul>
        </nav>
    );
}
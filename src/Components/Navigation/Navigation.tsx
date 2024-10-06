import { NavLink } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { getCategories } from "../../../data/ProductData";
import { CategoryDataInterface } from "../../../App.types.ts";
import chevronIcon from "../../assets/images/icons/chevron-down-solid.svg";
import useMediaQuery from "../../Hooks/UseMediaQueryHook/useMediaQuery.tsx";
import "./style.css";

interface NavigationInterface {
    SetMenuState: (state:boolean) => void;
}

export const Navigation = ({ SetMenuState }:NavigationInterface) => {

    const [getCategoryData, setCategoryData] = useState<Array<CategoryDataInterface> | null>(null);
    const [getNavigationState, setNavigationState] = useState<boolean>(false);

    useEffect(() => {
        fetchData();
    }, []);

    const ref = useRef<HTMLElement>(null);

    const Elref = useRef<HTMLUListElement>(null);

    const Mobile = useMediaQuery(`(max-width: 768px)`);

    function outsideClickHandler(e:Event) {
        e.preventDefault();
        if (ref.current && !ref.current.contains(e.target as HTMLButtonElement)) {
            setNavigationState(false);
        } 
    }

    useEffect(() => {
        window.addEventListener("mousedown", outsideClickHandler);
        return (() => {
            window.removeEventListener("mousedown", outsideClickHandler);
        });
    },[Elref]);

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
        <nav ref={ref} style={getNavigationState ? {maxHeight: Elref.current?.clientHeight} : !Mobile ? {maxHeight: "50px"} : {maxHeight: "90vh"} }>
            <ul ref={Elref}>
                {GenerateCategoryLinks}
            </ul>
            <span className={getNavigationState ? 'active' : ''} onClick={() => setNavigationState(!getNavigationState)}><img src={chevronIcon} width="24" height="24"/></span>
        </nav>
    );
}
import { useState, useCallback, useEffect, useRef } from "react";
import { searchProducts } from "../../../data/ProductData";
import SearchIcon from "../../assets/images/icons/search-icon.svg";
import CloseIcon from "../../assets/images/icons/circle-xmark-regular.svg";
import "./style.css";
import { NavLink } from "react-router-dom";
import { SearchResultInterface } from "../../../App.types";

export const Search = () => {

    const [getSearchQuery, setSearchQuery] = useState<string>('');
    const [getSearchResults, setSearchResults] = useState<SearchResultInterface | null> ();
    const [getSearchState, setSearchState] = useState<boolean>(false);
    const [getInputState, setInputState] = useState<boolean>(false);

    const ref = useRef<HTMLInputElement>(null);

    function outsideClickHandler(e:Event) {
        e.preventDefault();
        if (ref.current && !ref.current.contains(e.target as HTMLButtonElement)) {
            setInputState(false);
        } 
    }

    const fetchSearchResults = useCallback(async (value: string) => {
        const data:SearchResultInterface = await searchProducts(value).then((response) => {
            return response;
        })
        setSearchResults(data);
    }, [getSearchQuery]);

    useEffect(() => {
        const delayDebounceFn = setTimeout(async () => {
            getSearchQuery !== "" && await fetchSearchResults(getSearchQuery);
        }, 1000);
        return () => clearTimeout(delayDebounceFn);
    },[getSearchQuery]);

    useEffect(() => {
        getInputState && window.addEventListener("mousedown", outsideClickHandler);
        return (() => {
            window.removeEventListener("mousedown", outsideClickHandler);
        });
    });

    function handleClick() {
        setInputState(false);
        setSearchState(false);
    }

    const GenerateSearchResult = getSearchResults && getSearchResults.products.map((item:any, index:number) => {
        const Link = item.title.split(' ').join('-').toLowerCase();
        return (
            <li key={index} className="search-item">
                <NavLink to={`/${Link}`} state={{id: item.id}} onClick={handleClick}>
                    <span>{item.title}</span>
                </NavLink>
            </li>
        );
    });

    return (
        <div ref={ref} className={getSearchState ? "search-container" : "search-container active"}>
            <div className="search-wrapper">
                <input onClick={() => setInputState(!getInputState)} type="text" placeholder="Search..." value={getSearchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                <div className="search-icon" onClick={() => setSearchState(!getSearchState)}>
                    <span className={getSearchState ? "icon active" : "icon"}><img className="search" src={SearchIcon}/> <img className="close" src={CloseIcon}/></span>
                </div>
            </div>
            {GenerateSearchResult && <ul className={getInputState ? "search-results-wrapper active": "search-results-wrapper"}>{GenerateSearchResult}</ul>}
        </div>
    );
}
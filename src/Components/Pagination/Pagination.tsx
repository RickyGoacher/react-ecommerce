import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import "./styles.css";

interface PaginationInterface {
    Total: number;
    Limit: number;
    SetPageNumber: (value: number) => void;
}

export const Pagination = ({Total, Limit, SetPageNumber}:PaginationInterface) => {

    const [searchParams, setSearchParams] = useSearchParams();

    const NumberOfPages = Math.ceil(Total / Limit);

    const PageNumber = searchParams.get('page') ? Number(searchParams.get('page')) : 1;

    useEffect(() => {
        SetPageNumber(PageNumber - 1);
    },[searchParams])

    function changePage (num:number) {
        SetPageNumber(num - 1);
        setSearchParams({'page': `${num}`})
    }

    return (
        <div className="pagination">
            {PageNumber == 1 ? <span className="disabled">Prev</span> : <span onClick={() => changePage(PageNumber - 1) } >Prev</span> }
            
            {PageNumber !== 1 && <span onClick={() => changePage(PageNumber + 1) } >{PageNumber - 1}</span>}
            {PageNumber && <span className="current-page">{PageNumber}</span>}
            {PageNumber + 1 <= NumberOfPages && <span onClick={() => changePage(PageNumber + 2) } >{PageNumber + 1}</span>}
            {PageNumber == NumberOfPages ? <span className="disabled">Next</span> : <span  onClick={() => changePage(PageNumber + 1) }>Next</span> }
        </div>
    );
}
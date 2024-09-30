interface SortOrderInterface {
    SetSortOrder: ({}: {direction: string, param: string}) => void;
    Title: string;
    SortBy: string;
}

export const SortOrder = ({SetSortOrder, Title, SortBy}:SortOrderInterface) => {

    return (
        <div>
            <span>{Title}: </span>
            <select onChange={(e) => SetSortOrder({direction: e.target.value, param: SortBy})}>
                <option value="asc">Asc</option>
                <option value="desc">Desc</option>
            </select>
        </div>
    );
}
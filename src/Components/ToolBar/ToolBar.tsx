import { SortOrder } from "../SortOrder/SortOrder";
import "./style.css";

export const ToolBar = (props:any) => {
    return (
        <div className="toolbar">
            <SortOrder Title="Price" SetSortOrder={props.SetSortOrder} SortBy="price" />
            <SortOrder Title="Name" SetSortOrder={props.SetSortOrder} SortBy="title"/>       
        </div>
    );
}
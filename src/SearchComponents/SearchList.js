import React, {useContext } from "react";
import {NoteContext} from "../Note/NoteContext";
import SearchHistory from "./SearchHistory";

const SearchList =() => {
   const {searchedItem} =useContext(NoteContext)
    return(
        <div className={"notes-list"}>
            { (searchedItem.length > 0 ) ?
                (
                    <div >
                        {searchedItem.map(item => {
                            return (
                                <SearchHistory
                                    key={Math.random().toString()}
                                    item={item}
                                    date={item.addedDate}
                                />)
                        })}</div>
                ) : (<h1>History Is Empty</h1>)
            }
        </div>
    )
}
export default SearchList;
import React, {useContext, useEffect, useState} from "react";
import {MdSearch} from "react-icons/md"
import {NoteContext} from "../Note/NoteContext";
import useLocalStorage from "../Hooks/useLocalStorage";

const Search = ({searchHandler}) => {

   const {addSearchedItem} = useContext(NoteContext);
    const [searchText,setSearchText] = useState();

    useEffect( (event) => {
        if (searchText) {
            addSearchedItem(searchText);
        }
    },[searchText]);
    const searchedInput =(event)=>{
        //event.preventDefault();
        if (event.key === "Enter") {
            setSearchText(event.target.value);
            searchHandler(event.target.value);
       }
    }
    return(
        <div className={"search"}>
            <MdSearch />
            <input
                type={"text"}
                placeholder={"Search for a note "}
                //onKeyPress={(event)=>searchHandler(event.target.value)}
                onKeyPress={searchedInput}
            />
        </div>
    );
};
export default Search;
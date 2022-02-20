import React, {useContext, useEffect, useState} from "react";
import {NoteContext} from "../Note/NoteContext";
import {FaTimes} from 'react-icons/fa';
import {NavLink} from "react-router-dom";
import Note from "../Note/Note";
const SearchHistory =( {item} ) => {
    const { deleteSearchedItem, getHistoryItem } = useContext(NoteContext);

   const onClickHandler =() => {
       console.log(item.text)
       getHistoryItem(item.text)
    }
    return (
            <div className={"items"}>
                        <small>{item.addedDate}</small>
                        <span>{item.text}</span>
                <button  className={'save'} onClick={() => deleteSearchedItem(item.id)}>
                    <FaTimes/>
                </button>
                <NavLink to={'/note-list'}>
                    <button className={'save'} onClick={onClickHandler}>
                        Return
                    </button>
                </NavLink>

            </div>

    );
};
export default SearchHistory
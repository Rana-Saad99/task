import React, {createContext, useEffect, useState} from "react";
import useLocalStorage from '../Hooks/useLocalStorage';
export  const NoteContext = createContext();

const NoteContextProvider = (props) => {

   const [ notes, setNotes ] = useLocalStorage('notes','');
   const [ searchedItem, setSearchedItem ] = useLocalStorage('searched','');

   const [flag,setFlag] = useLocalStorage('flag','');
   const [historyItem, setHistoryItem] = useLocalStorage('history','')

    const date = new Date();
    const addedDate = date.toLocaleDateString();
    const searchDate = date.toLocaleDateString()+' | '+ date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

    const addNote = (text) => {
        const newNote = {
            id:Math.random().toString(),
            text: text,
            addedDate:addedDate,
        }
        setNotes([...notes, newNote
            // { text, id:Math.random().toString(), addedDate }
        ]);

    }

    const getHistoryItem = (text) => {
        setHistoryItem(notes.filter((note)=>note.text.toLowerCase().includes(text)));
        setFlag("true");
    }

    const deleteNote = (id) => {
        setNotes(notes.filter(note => note.id !== id));
    }

    const deleteSearchedItem = (id) => {
        setSearchedItem(searchedItem.filter(item => item.id !== id))
    }

    const addSearchedItem = (text) => {
        const newSearchedItem = {
            id:Math.random().toString(),
            text: text,
            addedDate:searchDate,
        }
        setSearchedItem([...searchedItem, newSearchedItem]);
    }

    const onClickHandler = ( )=>{
        setFlag("false");
    }


    return(
        <NoteContext.Provider value={{
            notes,
            addNote,
            deleteNote,
            deleteSearchedItem,
            searchedItem,
            addSearchedItem,
            getHistoryItem,
            historyItem,
            flag,
            onClickHandler
        }}>
            {props.children}
        </NoteContext.Provider>
    );
};
export default NoteContextProvider;
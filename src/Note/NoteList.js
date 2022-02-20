import React, {useContext, useState} from "react";
import Note from "./Note";
import {NoteContext} from "./NoteContext";
import Search from "../SearchComponents/Search";

const NoteList =() =>{
    const [searchNote,setSearchNote] = useState('');
    const { notes,flag,historyItem,onClickHandler } = useContext(NoteContext);

    return (
        <div >
            <Search  searchHandler={setSearchNote}/>
            <button className={"save"} onClick={onClickHandler}>
                get All notes
            </button>
            { flag=="true"? (
                    <div className={'notes-list'}>
                        {historyItem.map(note => {
                            return (
                                <Note
                                    key={Math.random().toString()}
                                    note={note}
                                    date={note.addedDate}
                                />)
                        })}</div>
                ):
                (notes.length > 0 ) ?
              (
                 <div className={'notes-list'}>
                     {notes.filter((note)=>note.text.toLowerCase().includes(searchNote)).map(note => {
                    return (
                        <Note
                            key={Math.random().toString()}
                            note={note}
                            date={note.addedDate}
                        />)
                 })}</div>
              ) : (<h1>No notes are found</h1>)
            }

        </div>
    );
}
export default NoteList;
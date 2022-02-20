import React, {useContext} from "react";
import {NoteContext} from "./NoteContext";

const Note = ( {note} ) => {
 const { deleteNote } = useContext(NoteContext);
    return (
        <div className={"note"}>
            <span>{ note.text }</span>
            <div className={"note-footer"}>
                <small>{ note.addedDate }</small>
                <button
                     onClick={()=>{ deleteNote(note.id) }}
                         className={"save"}>
                    Delete Note</button>
            </div>
        </div>
    )
};
export default Note;
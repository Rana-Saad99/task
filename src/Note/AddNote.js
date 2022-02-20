import React, {useContext, useState} from "react";
import {NoteContext} from "./NoteContext";
import {useHistory} from "react-router-dom";

const AddNote = ( ) => {

    let history = useHistory();
    const { addNote } = useContext(NoteContext);
    const [ noteText, setNoteText ] = useState('');

    const textChangingHandle =( event )=> {
            setNoteText(event.target.value);
    }
    const saveNoteHandler =( event ) =>{
        event.preventDefault();
        addNote( noteText );
        setNoteText('');
        history.push("/note-list");
    };


    return (
        <div className="note new">
            <textarea  cols="10" rows="8"
                       placeholder="Add your new note..."
                        value={ noteText }
                       onChange={ textChangingHandle }
            />
            <div className="note-footer">
                <button className="save"  onClick={ saveNoteHandler }>Save</button>
            </div>
        </div>
    )
};

export default AddNote;
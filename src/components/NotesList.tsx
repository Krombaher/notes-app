import React from "react";
import {Notes} from "./Notes";
import s from '../scss/NotesList.module.scss'
import {DataNotesType} from "../App";

export type NotesListPropsType = {
    dataNotes: DataNotesType[]
    setNotes: (notes: DataNotesType[]) => void
}

export const NotesList = (props: NotesListPropsType) => {
    return (
        <div className={s.notesList}>
            <Notes
                dataNotes={props.dataNotes}
                setNotes={props.setNotes}
            />
        </div>
    )
}
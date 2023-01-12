import React from "react";
import {Notes} from "./Notes";
import s from '../scss/NotesList.module.scss'
import {FilterTagsBtn} from "./FilterTagsBtn";

export const NotesList = () => {
    return (
        <div className={s.notesList}>
            <FilterTagsBtn />
            <Notes/>
        </div>
    )
}
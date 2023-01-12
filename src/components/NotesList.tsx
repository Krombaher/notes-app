import React, {useState} from "react";
import {Notes} from "./Notes";
import s from '../scss/NotesList.module.scss'

export const NotesList = () => {
    return (
        <div className={s.notesList}>
            <Notes/>
        </div>
    )
}
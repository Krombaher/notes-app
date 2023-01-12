import React, {ChangeEvent, useState} from "react";
import s from '../scss/App.module.scss'
import {useAppDispatch} from "../hooks/react-redux-hooks";
import {addNoteTC} from "../redux/AppNoteReducer";

export const NotesHeader = () => {
    const [text, setText] = useState('')
    const dispatch = useAppDispatch()

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
    }

    const addNotes = () => {
        dispatch(addNoteTC(text))
    }

    return (
        <div className={s.header}>
            <h3>Notes</h3>
            <input onChange={onChangeHandler}/>
            <button onClick={addNotes}>Add</button>
        </div>
    )
}
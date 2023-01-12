import React from "react";
import s from "../scss/Notes.module.scss";
import {Tags} from "./Tags";
import {NotesBody} from "./NotesBody";
import {v1} from "uuid";
import {useSelector} from "react-redux";
import {AppStateType} from "../redux/Redux-store";
import {DataNotesType} from "../Types/Types";
import {useAppDispatch} from "../hooks/react-redux-hooks";
import {removeNoteTC} from "../redux/AppNoteReducer";

export const Notes = () => {
    const {dataNotes} = useSelector<AppStateType, DataNotesType>(state => state.dataNotes)
    const dispatch = useAppDispatch()

    const removeNotes = (id: string) => {
        dispatch(removeNoteTC(id))
    }

    const notesItems = dataNotes.map(el => {
        return (
            <>
                <div key={el.id} className={s.notes}>
                    <button onClick={() => removeNotes(el.id)}>X</button>
                    <h3>{el.title}</h3>
                    <NotesBody
                        tags={el.tags}
                        id={el.id}
                        body={el.body}
                    />
                    <div>
                        {
                            el.tags.map(tags => <Tags key={v1()} tags={tags}/>)
                        }
                    </div>
                </div>
            </>
        )
    })

    return (
        <div className={s.notesBlock}>
            {notesItems}
        </div>

    )
}
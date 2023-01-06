import React, {useState} from "react";
import s from "../scss/Notes.module.scss";
import {Tags} from "./Tags";
import {NotesBody} from "./NotesBody";
import {DataNotesType} from "../App";
import {v1} from "uuid";
import {productAPI} from "../Api/Api";

export type NotesPropsType = {
    dataNotes: DataNotesType[]
    setNotes: (notes: DataNotesType[]) => void
}

export const Notes = (props: NotesPropsType) => {

    const notesItems = props.dataNotes.map(el => {

        const removeNotes = (id: string) => {
            productAPI.deleteCatalog(el.id)
                .then(res => console.log(res))
                .then(res => props.setNotes(props.dataNotes
                    .filter(el => el.id !== id)))
                .catch(res => console.log(res))
        }

        return (
            <>
                <div key={el.id} className={s.notes}>
                    <button onClick={() => removeNotes(el.id)}>X</button>
                    <h3>{el.title}</h3>
                    <NotesBody
                        tags={el.tags}
                        dataNotes={props.dataNotes}
                        id={el.id}
                        body={el.body}
                        setNotes={props.setNotes}
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
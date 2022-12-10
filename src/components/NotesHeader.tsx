import React, {ChangeEvent, useState} from "react";
import s from '../scss/App.module.scss'
import {DataNotesType} from "../App";

export type NotesHeaderPropsType = {
    addNotes: (title: string) => void
    dataNotes: DataNotesType[]

}

export const NotesHeader = (props: NotesHeaderPropsType) => {
    const [text, setText] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
    }

    // const tags = props.dataNotes.map(el => el.tags)

    return (
        <div className={s.header}>
            <h3>Notes</h3>
            <input onChange={onChangeHandler}/>
            <button onClick={() => props.addNotes(text)}>Add</button>


            {/*{*/}
            {/*    tags.map(el => {*/}
            {/*        return (*/}
            {/*            el.map(el => {*/}
            {/*                return (*/}
            {/*                    <button>{el}</button>*/}
            {/*                )*/}
            {/*            })*/}
            {/*        )*/}
            {/*    })*/}
            {/*}*/}

        </div>
    )
}
import React, {ChangeEvent, useState} from "react";
import s from "../scss/Notes.module.scss";
import {useAppDispatch} from "../hooks/react-redux-hooks";
import {changeBodyNoteTC} from "../redux/AppNoteReducer";

type NotesBodyPropsType = {
    id: string
    body: string
    tags: string[]
}

export const NotesBody = (props: NotesBodyPropsType) => {
    const [editMode, setEditMode] = useState(true)
    const [title, setTitle] = useState(props.body)
    const dispatch = useAppDispatch()

    const spanStyle = (word: string) => {
        return props.tags.includes(word) ? {color: "dodgerblue"} : {}
    }
    // const allTags = props.dataNotes.filter(el => el.id === props.id)[0].tags
    const words = title.split(' ').map(word => {
        return (
            <span style={spanStyle(word)}> {word}</span>
            //allTags.includes(word) ? <span style={{color: 'blue'}}>{word}</span> : <span>{word}</span>
        )
    })

    const activateEditMode = () => {
        setEditMode(false)
    }

    const activateViewMode = () => {
        let tags = title.split(' ').filter(el => {
            if (el['0'] === '#') return el
        })

        dispatch(changeBodyNoteTC(props.id, title, tags))
        setEditMode(true)
    }

    const onChangeTitleHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(e.currentTarget.value)
    }

    return (
        <div className={s.bodyBlock}>
            {
                editMode ?
                    <p
                        id={'myDiv'}
                        className={s.notesBodySpan}
                        onClick={activateEditMode}
                    >
                        {
                            words
                        }
                    </p>
                    :
                    <textarea
                        value={title}
                        onChange={onChangeTitleHandler}
                        onBlur={activateViewMode}
                    />

            }
        </div>
    )
}
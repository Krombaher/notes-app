import React, {ChangeEvent, useState} from "react";
import s from "../scss/Notes.module.scss";
import {DataNotesType} from "../App";
import {productAPI} from "../Api/Api";

type NotesBodyPropsType = {
    dataNotes: DataNotesType[]
    id: string
    body: string
    setNotes: (notes: DataNotesType[]) => void
    tags:string[]
}


export const NotesBody = (props: NotesBodyPropsType) => {
    const [editMode, setEditMode] = useState(true)
    const [title, setTitle] = useState(props.body)

    // const allTags = props.dataNotes.filter(el => el.id === props.id)[0].tags

    const words = title.split(' ').map(word => {
        return (
            <span style={ props.tags.includes(word) ? {color: "blue"} : {}}> {word }</span>
            //allTags.includes(word) ? <span style={{color: 'blue'}}>{word}</span> : <span>{word}</span>
        )
    })

    console.log(words)

    const activateEditMode = () => {
        let tags = title.split(' ').filter(el => {
            if (el['0'] === '#') {
              return (
                  el
              )
            }
        })

        productAPI.putBodyCatalog(props.id, title, tags)
            .then(res => console.log(res))
            .then(res => props.setNotes(props.dataNotes
                .map(el => {
                    return (
                        el.id === props.id ? {...el, body: title, tags: tags} : el
                    )
                })))
            .catch(res => console.log(res))
        setEditMode(false)
    }

    const activateViewMode = () => {
        setEditMode(true)
    }

    const onChangeTitleHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(e.currentTarget.value)
    }

    return (
        <div className={s.bodyBlock}>

            {
                editMode ?
                    <textarea
                        value={title}
                        onChange={onChangeTitleHandler}
                        onBlur={activateEditMode}
                    />
                    :
                    <p
                        id={'myDiv'}
                        className={s.notesBodySpan}
                        onClick={activateViewMode}
                    >
                        {
                            words
                        }
                    </p>
            }
        </div>
    )
}
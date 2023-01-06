import React from "react";
import s from '../scss/NotesList.module.scss'
import {DataNotesType} from "../App";

export type FilterTagsBtnPropsType = {
    dataNotes: DataNotesType[]
    filterNotes:(x:string) => void
}

export const FilterTagsBtn = (props: FilterTagsBtnPropsType) => {

    let collection = new Set()
    props.dataNotes.map(el => el.tags.map(tags => collection.add(tags)))
    const myArr = Array.from(collection).map((el: any, i) => {
        return (
            <button key={i} onClick={() => props.filterNotes(el)}>{el}</button>
        )
    })

    return (
        <div className={s.filterBtnBlock}>
            <button>All</button>
            {myArr}
        </div>
    )
}
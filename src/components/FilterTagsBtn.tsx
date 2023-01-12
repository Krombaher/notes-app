import React, {useEffect} from "react";
import s from '../scss/NotesList.module.scss'
import {DataNotesType} from "../Types/Types";
import {useSelector} from "react-redux";
import {AppStateType} from "../redux/Redux-store";
import {getNotesDataTC, setTagsTC} from "../redux/AppNoteReducer";
import {useAppDispatch} from "../hooks/react-redux-hooks";

export type FilterTagsBtnPropsType = {
    filterNotes:(filterTags:string) => void
}

export const FilterTagsBtn = (props: FilterTagsBtnPropsType) => {
    const {dataNotes, tags} = useSelector<AppStateType, DataNotesType>(state => state.dataNotes)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setTagsTC())
    }, [dataNotes])

    const myArr = tags.map((el: any, i) => {
        return (
            <button key={i} onClick={() => props.filterNotes(el)}>{el}</button>
        )
    })

    return (
        <div className={s.filterBtnBlock}>
            <button onClick={() => dispatch(getNotesDataTC())}>All</button>
            {myArr}
        </div>
    )
}
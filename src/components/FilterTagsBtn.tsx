import React, {useEffect} from "react";
import s from '../scss/NotesList.module.scss'
import {DataNotesType} from "../types/types";
import {useSelector} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {getNotesDataAC, getNotesDataTC, setTagsTC} from "../redux/appNoteReducer";
import {useAppDispatch} from "../hooks/react-redux-hooks";

export const FilterTagsBtn = () => {
    const {dataNotes, tags} = useSelector<AppStateType, DataNotesType>(state => state.dataNotes)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setTagsTC())
    }, [dataNotes])

    const filterNotes = (filterTags: string) => {
        const filteredNotes = dataNotes.filter(el => el.tags.length !== 0)
            .filter(el => el.tags.filter(tags => tags === filterTags).length !== 0)
        dispatch(getNotesDataAC(filteredNotes))
    }


    const myArr = tags.map((el: any, i) => {
        return (
            <button key={i} onClick={() => filterNotes(el)}>{el}</button>
        )
    })

    return (
        <div className={s.filterBtnBlock}>
            <button onClick={() => dispatch(getNotesDataTC())}>All</button>
            {myArr}
        </div>
    )
}
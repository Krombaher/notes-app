import React, {useEffect} from 'react';
import s from './scss/App.module.scss'
import {NotesHeader} from "./components/NotesHeader";
import {NotesList} from "./components/NotesList";
import {useAppDispatch} from "./hooks/react-redux-hooks";
import {getNotesDataAC, getNotesDataTC, setTagsTC} from "./redux/AppNoteReducer";
import {FilterTagsBtn} from "./components/FilterTagsBtn";
import {useSelector} from "react-redux";
import {AppStateType} from "./redux/Redux-store";
import {DataNotesType} from "./Types/Types";

function App() {
    const {dataNotes} = useSelector<AppStateType, DataNotesType>(state => state.dataNotes)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getNotesDataTC())
    }, [])

    //filter

    const filterNotes = (filterTags:string) => {
        const filteredNotes = dataNotes.filter(el => el.tags.length !== 0)
            .filter(el => el.tags.filter(tags => tags === filterTags).length !== 0)

        dispatch(getNotesDataAC(filteredNotes))
    }

    return (
        <div className={s.container}>
            <NotesHeader />
            <NotesList/>
            <FilterTagsBtn filterNotes={filterNotes}/>
        </div>
    );
}

export default App;

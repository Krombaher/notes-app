import React, {useEffect} from 'react';
import s from './scss/App.module.scss'
import {NotesHeader} from "./components/NotesHeader";
import {NotesList} from "./components/NotesList";
import {useAppDispatch} from "./hooks/react-redux-hooks";
import {getNotesDataTC} from "./redux/appNoteReducer";

function App() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getNotesDataTC())
    }, [])

    return (
        <div className={s.container}>
            <div>
                <NotesHeader/>
                <NotesList/>
            </div>
        </div>
    );
}

export default App;

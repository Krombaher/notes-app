import React, {useEffect, useState} from 'react';
import s from './scss/App.module.scss'
import {NotesHeader} from "./components/NotesHeader";
import {NotesList} from "./components/NotesList";
import {productAPI} from "./Api/Api";

export type DataNotesType = {
    id: string
    title: string
    body: string
    tags: string[]
}

export type DataType = {
    title: string
    body: string
}

function App() {
    const [notes, setNotes] = useState<DataNotesType[]>([])

    const addNotes = (title: string) => {
        let newNotes = {title: title, body: '', tags: []}
        productAPI.postCatalog(newNotes).then(response => {
            setNotes([...notes, response])
        })
    }

    useEffect(() => {
        productAPI.getCatalog().then(response => {
            setNotes(response)
        })
    }, [])

    return (
        <div className={s.container}>
            <NotesHeader addNotes={addNotes} dataNotes={notes}/>
            <NotesList
                dataNotes={notes}
                setNotes={setNotes}
            />
        </div>
    );
}

export default App;

import React, {useEffect, useState} from 'react';
import s from './scss/App.module.scss'
import {NotesHeader} from "./components/NotesHeader";
import {NotesList} from "./components/NotesList";
import {productAPI} from "./Api/Api";
import {FilterTagsBtn} from "./components/FilterTagsBtn";

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

    useEffect(() => {
        productAPI.getCatalog().then(res=> {
            setNotes(res)
        })
    }, [])

    //filter

    const filterNotes = (filterTags:string) => {
        setNotes(notes.filter(el => el.tags.length !== 0)
            .filter(el => el.tags.filter(tags => tags === filterTags).length !== 0))
    }

    const addNotes = (title: string) => {
        let newNotes = {title: title, body: '', tags: []}
        productAPI.postCatalog(newNotes).then(res => {
            setNotes([...notes, res])
        })
    }



    return (
        <div className={s.container}>
            <NotesHeader addNotes={addNotes} dataNotes={notes}/>
            <NotesList
                dataNotes={notes}
                setNotes={setNotes}
            />
            <FilterTagsBtn
                dataNotes={notes}
                filterNotes={filterNotes}
            />
        </div>
    );
}

export default App;

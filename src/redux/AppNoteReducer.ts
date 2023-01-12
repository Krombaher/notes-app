import {DataNotesType, NotesType} from "../Types/Types";
import {Dispatch} from "react";
import {notesAPI} from "../Api/NotesApi";
import {AppStateType} from "./Redux-store";

export type ActionType = GetNotesDataAT | AddNoteAT | ChangeBodyNoteAT | RemoveNoteAT | SetTagsAC

type GetNotesDataAT = ReturnType<typeof getNotesDataAC>
type SetTagsAC = ReturnType<typeof setTagsAC>
type AddNoteAT = ReturnType<typeof addNoteAC>
type ChangeBodyNoteAT = ReturnType<typeof changeBodyNoteAC>
type RemoveNoteAT = ReturnType<typeof removeNoteAC>

let initialState: DataNotesType = {
    dataNotes: [],
    tags: []
}

export const appNoteReducer = (state = initialState, action: ActionType): DataNotesType => {
    switch (action.type) {

        case 'GET_NOTES_DATA':
            return {...state, dataNotes: [...action.dataNotes]}

        case 'SET_TAGS':
            return {...state, tags: action.tags}

        case 'ADD_NOTE_DATA':
            return {...state, dataNotes: [...state.dataNotes, action.obj]}

        case 'CHANGE_BODY_NOTE':
            return {
                ...state, dataNotes: state.dataNotes.map(el => {
                    return (
                        el.id === action.obj.id ? {...el, body: action.obj.title, tags: action.obj.tags} : el
                    )
                })
            }

        case 'REMOVE_NOTE':
            return {...state, dataNotes: state.dataNotes.filter(el => el.id !== action.id)}

        default:
            return state
    }
}

//Action
export const getNotesDataAC = (dataNotes: NotesType[]) => {
    return {type: 'GET_NOTES_DATA', dataNotes} as const
}

export const setTagsAC = (tags: string[]) => {
    return {type: 'SET_TAGS', tags} as const
}

export const addNoteAC = (obj: NotesType) => {
    return {type: 'ADD_NOTE_DATA', obj} as const
}

export const changeBodyNoteAC = (obj: NotesType) => {
    return {type: 'CHANGE_BODY_NOTE', obj} as const
}

export const removeNoteAC = (id: string) => {
    return {type: 'REMOVE_NOTE', id} as const
}

//Thunk
export const getNotesDataTC = () => (dispatch: Dispatch<ActionType>) => {
    notesAPI.getNotes().then(res => {
        let tags = new Set()
        res.map((el: NotesType) => el.tags.map(tag => tags.add(tag)))

        //@ts-ignore
        let allTags: string[] = Array.from(tags)
        console.log(tags, 'tags')

        dispatch(getNotesDataAC(res))
    })
}

export const setTagsTC = () => (dispatch: Dispatch<ActionType>, getState: () => AppStateType) => {
    const notes = getState().dataNotes.dataNotes
    let tags = new Set()
    notes.map((el: NotesType) => el.tags.map(tag => tags.add(tag)))
    //@ts-ignore
    let allTags: string[] = Array.from(tags)
    dispatch(setTagsAC(allTags))
}

export const addNoteTC = (title: string) => (dispatch: Dispatch<ActionType>) => {
    let newNote = {title: title, body: '', tags: []}
    notesAPI.addNote(newNote).then(res => {
        dispatch(addNoteAC(res))
    })
}

export const changeBodyNoteTC = (id: string, title: string, tags: string[]) => (dispatch: Dispatch<ActionType>) => {
    notesAPI.changeBodyNote(id, title, tags)
        .then(res => {
            dispatch(changeBodyNoteAC(res))
        })

}

export const removeNoteTC = (id: string) => (dispatch: Dispatch<ActionType>) => {
    notesAPI.removeNote(id)
        .then(res => {
            dispatch(removeNoteAC(id))
        })
}



